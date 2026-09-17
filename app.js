(() => {
  "use strict";

  const data = window.STUDY_DATA;
  const events = data.events;
  const eventIds = new Set(events.map(event => event.id));
  const storageKey = "min-studieplan-2026-v1";
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const $ = id => document.getElementById(id);
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const dateFromIso = iso => {
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day);
  };
  const isoFromDate = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const addDays = (date, count) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + count);
  const startOfWeek = date => addDays(date, -((date.getDay() + 6) % 7));
  const sameDay = (a, b) => isoFromDate(a) === isoFromDate(b);
  let selectedWeek = startOfWeek(today);
  let subjectFilter = "all";
  let state = { ready: {}, tasks: [] };
  const fullDate = date => new Intl.DateTimeFormat("nb-NO", { weekday: "long", day: "numeric", month: "long" }).format(date);
  const shortDate = date => new Intl.DateTimeFormat("nb-NO", { day: "numeric", month: "short" }).format(date);
  const weekNumber = date => {
    const thursday = addDays(date, 3 - ((date.getDay() + 6) % 7));
    const firstThursday = new Date(thursday.getFullYear(), 0, 4);
    return 1 + Math.round((startOfWeek(thursday) - startOfWeek(firstThursday)) / 604800000);
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) state = validateState(JSON.parse(raw));
      const probe = "__study_planner_probe__";
      localStorage.setItem(probe, "1");
      localStorage.removeItem(probe);
    } catch {
      $("storage-notice").hidden = false;
      $("storage-notice").textContent = "Nettleseren kan ikke lagre fremdrift her. Prøv å åpne appen i en vanlig nettleserfane.";
    }
  }

  function validateState(candidate) {
    if (!candidate || typeof candidate !== "object" || !candidate.ready || typeof candidate.ready !== "object" || !Array.isArray(candidate.tasks)) {
      throw new Error("Filen har ikke riktig format.");
    }
    if (candidate.tasks.length > 1000) throw new Error("Filen inneholder for mange oppgaver.");
    const ready = {};
    for (const [id, value] of Object.entries(candidate.ready)) {
      if (eventIds.has(id) && value === true) ready[id] = true;
    }
    const tasks = candidate.tasks.map(task => {
      if (!task || typeof task.id !== "string" || typeof task.week !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(task.week) || typeof task.text !== "string" || !task.text.trim() || task.text.length > 160 || typeof task.done !== "boolean") {
        throw new Error("En oppgave i filen har ugyldige data.");
      }
      return { id: task.id.slice(0, 100), week: task.week, text: task.text.trim(), done: task.done };
    });
    return { ready, tasks };
  }

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      $("storage-notice").hidden = false;
      $("storage-notice").textContent = "Endringene kunne ikke lagres i nettleseren. Last ned en sikkerhetskopi før du lukker siden.";
    }
  }

  function sortedEvents(list) {
    return [...list].sort((a, b) => a.date.localeCompare(b.date) || (a.start || "99:99").localeCompare(b.start || "99:99") || a.title.localeCompare(b.title, "nb"));
  }

  function subjectTags(event) {
    return event.subjects.map(id => `<span class="subject-tag ${escapeHtml(id)}">${escapeHtml(data.subjects[id].name)}</span>`).join("");
  }

  function readingBlock(label, items, recommended = false) {
    if (!items?.length) return "";
    return `<div class="reading-block"><p class="reading-label ${recommended ? "recommended" : ""}">${escapeHtml(label)}</p><ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`;
  }

  function renderEvent(event) {
    const isReady = !!state.ready[event.id];
    const isSession = event.type === "session";
    const time = event.start ? `${event.start}${event.end ? `–${event.end}` : ""}` : "Tid ikke oppgitt";
    const meta = [event.room, event.teacher].filter(Boolean).map(value => `<span>${escapeHtml(value)}</span>`).join("");
    const source = event.subjects.map(id => data.subjects[id].name).join(" · ");
    const reading = readingBlock(event.readingLabel || (event.subjects.includes("ped3611") ? "Obligatorisk pensum" : "Pensum"), event.reading) + readingBlock("Anbefalt lesning", event.recommended, true);
    return `<article class="event-card ${escapeHtml(event.type)} ${isReady ? "is-ready" : ""}">
      <div class="event-top"><span class="time">${escapeHtml(time)}</span><div class="subject-tags">${subjectTags(event)}</div></div>
      <h4>${escapeHtml(event.title)}</h4>
      ${meta ? `<div class="event-meta">${meta}</div>` : ""}
      ${event.note ? `<p class="event-note">${escapeHtml(event.note)}</p>` : ""}
      ${event.mandatory || event.uncertainty ? `<div class="event-flags">${event.mandatory ? `<span class="flag">Obligatorisk${event.id === "shared-0916" ? " i PED 3611" : ""}</span>` : ""}${event.uncertainty ? `<span class="flag uncertain" title="${escapeHtml(event.uncertainty)}">Må sjekkes: ${escapeHtml(event.uncertainty)}</span>` : ""}</div>` : ""}
      ${reading ? `<div class="reading">${reading}</div>` : ""}
      <div class="event-bottom"><span class="source-label">Kilde: ${escapeHtml(source)}-planen${event.subjects.length > 1 ? "e" : ""}</span>${isSession ? `<button type="button" class="ready-button ${isReady ? "is-ready" : ""}" data-ready="${escapeHtml(event.id)}" aria-pressed="${isReady}">${isReady ? "✓ Klar" : "Merk som klar"}</button>` : ""}</div>
    </article>`;
  }

  function renderWeek() {
    const weekEnd = addDays(selectedWeek, 6);
    const weekStartIso = isoFromDate(selectedWeek);
    const weekEndIso = isoFromDate(weekEnd);
    $("week-title").textContent = `Uke ${weekNumber(selectedWeek)}`;
    $("week-dates").textContent = `${shortDate(selectedWeek)} – ${shortDate(weekEnd)} ${weekEnd.getFullYear()}`;
    const visible = sortedEvents(events.filter(event => event.date >= weekStartIso && event.date <= weekEndIso && (subjectFilter === "all" || event.subjects.includes(subjectFilter))));
    const sessions = visible.filter(event => event.type === "session");
    const countReady = sessions.filter(event => state.ready[event.id]).length;
    $("week-progress").innerHTML = `<span class="progress-strong">${countReady} av ${sessions.length} økter merket klar</span> · ${visible.filter(event => event.type !== "session").length} frister eller eksamener denne uka`;
    if (!visible.length) {
      $("events").innerHTML = `<div class="empty-week"><div class="empty-mark" aria-hidden="true">✳</div><h3>Ingen oppføringer denne uka</h3><p>Bruk pilene for å se en annen uke, eller velg alle fag.</p></div>`;
      return;
    }
    const groups = new Map();
    for (const event of visible) {
      if (!groups.has(event.date)) groups.set(event.date, []);
      groups.get(event.date).push(event);
    }
    $("events").innerHTML = [...groups].map(([iso, dayEvents]) => {
      const date = dateFromIso(iso);
      const range = dayEvents.find(event => event.endDate)?.endDate;
      return `<section class="day-group" aria-label="${escapeHtml(fullDate(date))}">
        <h3 class="day-title ${sameDay(date, today) ? "today" : ""}">${escapeHtml(fullDate(date))}${range ? `<small>til ${escapeHtml(shortDate(dateFromIso(range)))}</small>` : ""}</h3>
        ${dayEvents.map(renderEvent).join("")}
      </section>`;
    }).join("");
  }

  function renderDeadlines() {
    const todayIso = isoFromDate(today);
    const upcoming = sortedEvents(events.filter(event => event.type !== "session" && (event.endDate || event.date) >= todayIso)).slice(0, 5);
    $("deadlines").innerHTML = upcoming.length ? upcoming.map(event => {
      const date = dateFromIso(event.date);
      const month = new Intl.DateTimeFormat("nb-NO", { month: "short" }).format(date).replace(".", "");
      const range = event.endDate ? `–${dateFromIso(event.endDate).getDate()}` : "";
      return `<div class="deadline-item"><div class="deadline-date"><strong>${date.getDate()}${range}</strong><span>${escapeHtml(month)}</span></div><div><h4>${escapeHtml(event.title)}</h4><p>${escapeHtml(data.subjects[event.subjects[0]].name)} · ${event.start ? escapeHtml(event.start) : "Tid ikke oppgitt"}</p></div></div>`;
    }).join("") : `<p class="deadlines-empty">Ingen flere frister i denne planen.</p>`;
  }

  function renderTasks() {
    const week = isoFromDate(selectedWeek);
    const tasks = state.tasks.filter(task => task.week === week);
    $("task-list").innerHTML = tasks.length ? tasks.map(task => `<div class="task-item ${task.done ? "done" : ""}" data-task="${escapeHtml(task.id)}">
      <input type="checkbox" data-task-check="${escapeHtml(task.id)}" ${task.done ? "checked" : ""} aria-label="Marker ${escapeHtml(task.text)} som ${task.done ? "ikke ferdig" : "ferdig"}">
      <span class="task-text">${escapeHtml(task.text)}</span>
      <span class="task-actions"><button type="button" data-task-edit="${escapeHtml(task.id)}">Rediger</button><button type="button" data-task-delete="${escapeHtml(task.id)}">Slett</button></span>
    </div>`).join("") : `<p class="tasks-empty">Ingen egne oppgaver denne uka ennå.</p>`;
  }

  function renderNextUp() {
    const todayIso = isoFromDate(today);
    const nowTime = new Intl.DateTimeFormat("nb-NO", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
    const next = sortedEvents(events.filter(event => (event.endDate || event.date) >= todayIso && (event.date > todayIso || !event.end || event.end >= nowTime)))[0];
    $("next-up").innerHTML = next ? `<p class="mini-label">NESTE PÅ PLANEN</p><strong>${escapeHtml(next.title)}</strong><span>${escapeHtml(fullDate(dateFromIso(next.date)))} · ${next.start ? escapeHtml(next.start) : "Tid ikke oppgitt"} · ${escapeHtml(next.subjects.map(id => data.subjects[id].name).join(" / "))}</span>` : `<p class="mini-label">PLANEN ER GJENNOMFØRT</p><strong>Ingen flere oppføringer</strong><span>Du kan fortsatt bla tilbake og se semesteret.</span>`;
  }

  function render() {
    renderWeek();
    renderDeadlines();
    renderTasks();
    renderNextUp();
  }

  function changeWeek(days) {
    selectedWeek = addDays(selectedWeek, days);
    renderWeek();
    renderTasks();
  }

  $("previous-week").addEventListener("click", () => changeWeek(-7));
  $("next-week").addEventListener("click", () => changeWeek(7));
  $("today-button").addEventListener("click", () => { selectedWeek = startOfWeek(today); renderWeek(); renderTasks(); });
  $("filters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    subjectFilter = button.dataset.filter;
    for (const chip of $("filters").querySelectorAll("[data-filter]")) {
      chip.classList.toggle("active", chip === button);
      chip.setAttribute("aria-pressed", String(chip === button));
    }
    renderWeek();
  });
  $("events").addEventListener("click", event => {
    const button = event.target.closest("[data-ready]");
    if (!button) return;
    const id = button.dataset.ready;
    if (!eventIds.has(id)) return;
    if (state.ready[id]) delete state.ready[id]; else state.ready[id] = true;
    saveState();
    renderWeek();
  });

  $("task-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("task-input");
    const value = input.value.trim();
    if (!value) return;
    state.tasks.push({ id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, week: isoFromDate(selectedWeek), text: value.slice(0, 160), done: false });
    input.value = "";
    saveState();
    renderTasks();
    input.focus();
  });
  $("task-list").addEventListener("change", event => {
    const id = event.target.dataset.taskCheck;
    if (!id) return;
    const task = state.tasks.find(item => item.id === id);
    if (task) { task.done = event.target.checked; saveState(); renderTasks(); }
  });
  $("task-list").addEventListener("click", event => {
    const edit = event.target.closest("[data-task-edit]");
    const remove = event.target.closest("[data-task-delete]");
    if (remove) {
      const task = state.tasks.find(item => item.id === remove.dataset.taskDelete);
      if (task && confirm(`Slette oppgaven «${task.text}»?`)) {
        state.tasks = state.tasks.filter(item => item.id !== task.id);
        saveState(); renderTasks();
      }
    }
    if (edit) {
      const task = state.tasks.find(item => item.id === edit.dataset.taskEdit);
      const row = edit.closest(".task-item");
      if (!task || !row) return;
      row.innerHTML = `<form class="task-edit"><label class="sr-only" for="task-edit-input">Rediger oppgave</label><input id="task-edit-input" maxlength="160" required value="${escapeHtml(task.text)}"><button type="submit">Lagre</button><button type="button" data-edit-cancel>Avbryt</button></form>`;
      row.querySelector("input").focus();
      row.querySelector("[data-edit-cancel]").addEventListener("click", renderTasks);
      row.querySelector("form").addEventListener("submit", submit => {
        submit.preventDefault();
        const value = row.querySelector("input").value.trim();
        if (value) { task.text = value; saveState(); renderTasks(); }
      });
    }
  });

  const dialog = $("backup-dialog");
  const openDialog = () => { $("backup-message").textContent = ""; dialog.showModal(); };
  $("backup-open").addEventListener("click", openDialog);
  $("backup-open-inline").addEventListener("click", openDialog);
  $("backup-close").addEventListener("click", () => dialog.close());
  $("export-button").addEventListener("click", () => {
    const payload = { format: "min-studieplan", version: 1, exportedAt: new Date().toISOString(), ready: state.ready, tasks: state.tasks };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `studieplan-sikkerhetskopi-${isoFromDate(today)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $("backup-message").textContent = "Sikkerhetskopien er lastet ned.";
  });
  $("import-file").addEventListener("change", async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 2_000_000) throw new Error("Filen er for stor.");
      const parsed = JSON.parse(await file.text());
      if (parsed.format !== "min-studieplan" || parsed.version !== 1) throw new Error("Filen er ikke en sikkerhetskopi fra denne appen.");
      const imported = validateState(parsed);
      if (confirm("Erstatte nåværende Klar-status og egne oppgaver med innholdet i filen?")) {
        state = imported;
        saveState();
        render();
        $("backup-message").textContent = "Sikkerhetskopien er hentet inn.";
      }
    } catch (error) {
      $("backup-message").textContent = `Kunne ikke hente inn filen: ${error.message}`;
    } finally {
      event.target.value = "";
    }
  });

  loadState();
  render();
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
  }
})();
