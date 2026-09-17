const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const file = path.join(root, pathname === "/" ? "index.html" : pathname);
  if (!file.startsWith(root + path.sep) && file !== path.join(root, "index.html")) {
    response.writeHead(403).end();
    return;
  }
  const type = file.endsWith(".js") ? "text/javascript" : file.endsWith(".css") ? "text/css" : file.endsWith(".svg") ? "image/svg+xml" : "text/html";
  try { response.writeHead(200, { "Content-Type": `${type}; charset=utf-8` }).end(fs.readFileSync(file)); }
  catch { response.writeHead(404).end(); }
});

async function main() {
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const browser = await chromium.launch({ headless: true, executablePath: fs.existsSync(chrome) ? chrome : edge });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true, timezoneId: "Europe/Oslo" });
  await context.addInitScript(() => {
    const NativeDate = Date;
    const fixed = "2026-09-17T10:00:00+02:00";
    window.Date = class extends NativeDate {
      constructor(...args) { super(...(args.length ? args : [fixed])); }
      static now() { return new NativeDate(fixed).valueOf(); }
    };
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/`);

  assert.equal(await page.locator("#week-title").textContent(), "Uke 38");
  assert.equal(await page.getByText("Felles KI-seminar", { exact: true }).count(), 1);
  assert.equal(await page.locator(".event-card").count(), 4);
  await page.getByRole("button", { name: "Merk som klar" }).first().click();
  assert.match(await page.locator("#week-progress").textContent(), /1 av 4/);
  await page.reload();
  assert.match(await page.locator("#week-progress").textContent(), /1 av 4/);

  await page.locator("#task-input").fill("Les kapittel 7");
  await page.locator("#task-form button").click();
  assert.equal(await page.locator(".task-item").count(), 1);
  await page.getByRole("button", { name: "Rediger" }).click();
  await page.locator("#task-edit-input").fill("Les kapittel 8");
  await page.getByRole("button", { name: "Lagre" }).click();
  await page.locator(".task-item input[type=checkbox]").check();
  await page.reload();
  assert.match(await page.locator(".task-item").textContent(), /Les kapittel 8/);
  assert.equal(await page.locator(".task-item input[type=checkbox]").isChecked(), true);

  await page.locator("#backup-open").click();
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#export-button").click();
  const download = await downloadPromise;
  const backup = JSON.parse(fs.readFileSync(await download.path(), "utf8"));
  assert.equal(backup.format, "min-studieplan");
  assert.equal(backup.tasks[0].text, "Les kapittel 8");
  await page.locator("#backup-close").click();

  await page.evaluate(() => localStorage.clear());
  await page.reload();
  assert.equal(await page.locator(".task-item").count(), 0);
  page.once("dialog", dialog => dialog.accept());
  await page.locator("#backup-open").click();
  await page.locator("#import-file").setInputFiles(await download.path());
  await page.waitForFunction(() => document.querySelector("#backup-message").textContent.includes("hentet inn"));
  assert.match(await page.locator("#backup-message").textContent(), /hentet inn/);
  await page.locator("#backup-close").click();
  assert.match(await page.locator("#week-progress").textContent(), /1 av 4/);
  assert.match(await page.locator(".task-item").textContent(), /Les kapittel 8/);

  await page.locator("#next-week").click();
  assert.equal(await page.locator("#week-title").textContent(), "Uke 39");
  await page.locator("#today-button").click();
  assert.equal(await page.locator("#week-title").textContent(), "Uke 38");
  await page.locator('[data-filter="ped3616"]').click();
  assert.equal(await page.locator(".event-card").count(), 2);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
  assert.deepEqual(errors, []);
  if (process.env.STUDY_SCREENSHOT) {
    await page.locator('[data-filter="all"]').click();
    await page.screenshot({ path: process.env.STUDY_SCREENSHOT, fullPage: true });
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.screenshot({ path: process.env.STUDY_SCREENSHOT.replace(/\.png$/, "-desktop.png"), fullPage: true });
  }
  const localPage = await context.newPage();
  await localPage.goto(`file:///${path.join(root, "index.html").replace(/\\/g, "/")}`);
  assert.equal(await localPage.locator("#week-title").textContent(), "Uke 38");
  await localPage.getByRole("button", { name: "Merk som klar" }).first().click();
  await localPage.reload();
  assert.match(await localPage.locator("#week-progress").textContent(), /1 av 4/);
  console.log("Smoke test passed: week view, shared event, progress, tasks, backup export/import, navigation, filter and mobile width.");
  await browser.close();
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
