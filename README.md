# Min studieplan høsten 2026

En enkel, mobilvennlig studieplan for PED 3611, PED 3616 og «Plan II». Appen viser 48 daterte oppføringer fra undervisningsplanene. Det felles KI-seminaret 16. september er lagt inn én gang.

## Åpne appen

1. Åpne prosjektmappen.
2. Dobbeltklikk [index.html](index.html). Den åpnes i nettleseren.
3. Bruk pilene ved «Uke» for å bla. «Til denne uka» går tilbake til nåværende uke.

Du trenger ingen GitHub-konto for å bruke appen lokalt. Den kan også åpnes uten internett. Chrome er testet; på andre nettlesere bør du sjekke at «Klar» og oppgaver fortsatt er der etter at du lukker og åpner siden igjen.

## Dette kan du gjøre

- Trykk **Merk som klar** ved en undervisningsøkt når du selv mener at lesningen er gjort. Trykk igjen for å angre.
- Velg fag øverst i ukeplanen hvis du bare vil se ett fag.
- Legg til egne oppgaver i «Mine oppgaver». De hører til uka som vises, og kan krysses av, redigeres og slettes.
- Åpne **Sikkerhetskopi** for å laste ned fremdrift og oppgaver som JSON. Bruk «Velg JSON-fil» for å hente den inn igjen. Import erstatter fremdriften i nettleseren.

«Klar» og egne oppgaver lagres bare i nettleseren på enheten du bruker. De følger ikke automatisk med til en annen mobil eller PC. Ta en sikkerhetskopi før du bytter enhet eller sletter nettleserdata.

## Når undervisningsplanene endres

Undervisningsdataene står samlet i [data.js](data.js). Legg en oppdatert undervisningsplan i prosjektmappen eller Downloads, og be Codex: «Oppdater studieplanen etter denne filen og sjekk alle berørte økter.» Du trenger ikke redigere kode selv.

Kildene som ble brukt 17. september 2026:

- `PED 3611 UNDERVISNINGSPLAN 2026 pr. 01.09.26.pdf`
- `Undervisningsplan_PED3616_H2026 oppdatert 28.8.2026.pdf` (dokumentets egen overskrift sier «Oppdatert 20.8.2026»)
- `Plan II h26.docx`

Kildene kan endres. Sjekk Canvas for gjeldende tidspunkt, oppmøtested og levering. Appen merker blant annet manglende klokkeslett ved eksamen og frister, forskjeller i litteraturhenvisninger og skolebesøket der oppmøtested ikke står i planen. «Plan II» brukes som fagnavn fordi emnekode ikke er oppgitt.

## GitHub og publisering

Appen er foreløpig bare i denne mappen. For gratis GitHub Pages trenger du en GitHub-konto med bekreftet e-post. GitHub Free krever et offentlig kodearkiv for Pages, og selve nettsiden blir offentlig tilgjengelig. Fremdrift og egne oppgaver lagres fortsatt bare i din nettleser; de legges ikke i kodearkivet. Ikke legg sikkerhetskopier eller personlige notater i kodearkivet.

Når kontoen er klar og offentlig publisering er godkjent, kan Codex opprette kodearkivet og slå på GitHub Pages. Du trenger ikke gjøre dette manuelt.

## For videre vedlikehold

Appen er ren HTML, CSS og JavaScript, uten bygging, abonnement, innlogging eller server. [tests/smoke.cjs](tests/smoke.cjs) tester ukevisning, lokal lagring, oppgaver, import/eksport, filtrering og mobilbredde med Playwright. Testen kjøres av Codex når appen oppdateres.
