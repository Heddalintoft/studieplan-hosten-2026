// Undervisningsdata for høsten 2026. Endre oppføringer her når planene oppdateres.
// Klokkeslett som ikke står i kilden er bevisst utelatt.
window.STUDY_DATA = {
  subjects: {
    ped3611: { name: "PED 3611", subtitle: "Utdanning, historie, politikk og styring" },
    ped3616: { name: "PED 3616", subtitle: "Mediedanning og mediepedagogikk" },
    plan2: { name: "Plan II", subtitle: "Emnekode ikke oppgitt i kilden" }
  },
  sources: {
    ped3611: "PED 3611 UNDERVISNINGSPLAN 2026 pr. 01.09.26.pdf",
    ped3616: "Undervisningsplan_PED3616_H2026 oppdatert 28.8.2026.pdf",
    plan2: "Plan II h26.docx"
  },
  events: [
    {
      id: "p3611-0819", date: "2026-08-19", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Introduksjon til emnet", room: "D131", teacher: "Heidun Oldervik",
      reading: ["Moos (2019), kap. 1", "Møller, Prøitz, Rye & Aasen (2013)"],
      recommended: ["Blossing, Imsen & Moos (2014), kap. 13", "Moos (2009)", "Karlsen (2006)", "Volckmar (2016)"]
    },
    {
      id: "p3611-0821", date: "2026-08-21", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Styring av utdanning: byråkrati, New Public Management og mål- og resultatstyring", room: "D131", teacher: "Heidun Oldervik",
      note: "Kunnskapsløftet som styringsreform.",
      reading: ["Møller, Prøitz, Rye & Aasen (2013)", "Møller & Skedsmo (2013)", "du Gay (2014)"],
      recommended: ["Blossing, Imsen & Moos (2014), kap. 13", "Moos (2009)", "Karlsen (2006)", "Møller & Rønnberg (2021)", "Dons (2012)", "Christensen et al. (2026)"]
    },
    {
      id: "p3616-0821", date: "2026-08-21", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Introduksjon til emnet og semesteroppgaven", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Hele pensum; se særlig aktuelle artikler på Canvas"],
      note: "Presentasjon av studenter, faglærere, pensum og referansegruppe."
    },
    {
      id: "p3611-0826", date: "2026-08-26", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Utdanningspolitikk og utdanningshistorie fra 1945", room: "D131", teacher: "Nina Volckmar",
      reading: ["Thuen & Volckmar (2020)"],
      recommended: ["Berglie, kap. 2 i Oldervik, Saur & Ulleberg (2020)", "Volckmar (2016), kap. 1–5"],
      note: "Planen oppfordrer til å lese Volckmar (2016), kap. 1–5 på forhånd."
    },
    {
      id: "plan2-0826", date: "2026-08-26", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Introduksjon og sosialkonstruktivisme", room: "D131", teacher: "Pål",
      reading: ["Burr (2015), kap. 1 og 3", "Segre (2016)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00 etter planens generelle tidspunkter."
    },
    {
      id: "p3611-0828", date: "2026-08-28", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Styring av utdanning: reformer, governance og governmentality", room: "D131", teacher: "Heidun Oldervik",
      reading: ["Steiner-Khamsi (2025)", "Røvik (2014)", "Dean (2014)"],
      recommended: ["Oldervik (2022)", "Eliassen & Oldervik (2020)"]
    },
    {
      id: "p3616-0828", date: "2026-08-28", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Mediegrafi som metode for mediekompetanse og mediedanning", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Bundsgaard (2022)", "Buckingham (2026)", "Hoechsmann & Poyntz (2012)", "Schofield & Carvajal (2022)", "Schofield & Kupiainen (2015)"],
      note: "Introduksjon til semesteroppgaven."
    },
    {
      id: "p3611-0902", date: "2026-09-02", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Gert Biesta om utdanningsinstitusjonenes mål og mening", room: "D131", teacher: "Håkon Aaltvedt",
      reading: ["Biesta (2009)", "Aaltvedt (2025)"]
    },
    {
      id: "plan2-0902", date: "2026-09-02", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Sosialkonstruktivisme", room: "D131", teacher: "Pål",
      reading: ["Burr (2015), kap. 4 og 9", "Francis & Hester (2004)", "Gomes (2024)", "Potter (2001)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00. Tabellen skriver «Gomez», mens pensumlisten skriver «Gomes». Tabellen oppgir Burr kap. 4 og 9, mens pensumlisten oppgir kap. 1, 3, 4 og 5. Kontroller i Canvas.",
      uncertainty: "Gomes/Gomez og Burr-kapitlene er motstridende oppgitt."
    },
    {
      id: "p3611-0904", date: "2026-09-04", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Overnasjonal utdanningspolitikk og lokale konsekvenser", room: "D131", teacher: "Eirik R. Hammarstrøm",
      note: "Evalueringspolitikk, OECD og policy borrowing.",
      reading: ["Phillips & Ochs (2004)", "Steiner-Khamsi (2012)"],
      recommended: ["Wiborg i Volckmar (2016)", "Steiner-Khamsi (2013)"]
    },
    {
      id: "p3616-0904", date: "2026-09-04", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Mediepedagogisk forskning og refleksivitet i mediepraksiser", room: "D131", teacher: "Vegard M. Frantzen",
      readingLabel: "Aktuelle referanser", reading: ["Hoechsmann & Poyntz (2012), kap. 1 og 2", "Schofield & Kupiainen (2015)", "Bundsgaard (2022)", "Paulsen & Tække (2019)", "Buckingham (2026), kap. 1"]
    },
    {
      id: "p3611-0909", date: "2026-09-09", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Politisk styring av skolens innhold", room: "D131", teacher: "Elise F. Djupedal",
      reading: ["Djupedal (2021)", "Djupedal (2022)"], recommended: ["Vogt (2020)"]
    },
    {
      id: "plan2-0909", date: "2026-09-09", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Sosial interaksjon og sosial ordning", room: "D131", teacher: "Pål",
      reading: ["Aarsand & Sørenssen (2021)", "Francis & Hester (2004)", "Goffman (1974)", "Hester (2009)", "Manning (1989)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3611-0911", date: "2026-09-11", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Seminar og gjesteforelesning om fylkeskommunen som skoleeier", room: "D131", teacher: "Heidun Oldervik og Vegard Iversen",
      note: "Seminar fra 08:15; gjesteforelesning fra 09:15. Forberedelse til skolebesøk.",
      recommended: ["Berglie (2020)", "Utvær (2020), i Oldervik, Saur & Ulleberg"]
    },
    {
      id: "p3616-0911", date: "2026-09-11", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Mediedanning: fra media literacy til media bildung", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Bundsgaard (2022)", "Hoechsmann & Poyntz (2012)", "Paulsen & Tække (2019)", "Østerud (2007)", "Buckingham (2026)", "Schofield et al. (2023)"],
      note: "Arbeid med semesteroppgaven."
    },
    {
      id: "shared-0916", date: "2026-09-16", start: "09:15", end: "13:00", subjects: ["ped3611", "ped3616", "plan2"], type: "session",
      title: "Felles KI-seminar", room: "Pav B, rom 156", teacher: "Lasse Mostad m.fl.", mandatory: true,
      readingLabel: "Oppgitt pensum", reading: ["Costa & Murphy (2025) – oppgitt i PED 3611"],
      note: "Kritisk, reflektert og pedagogisk bruk av KI. Obligatorisk i PED 3611. PED 3616 og Plan II fører samme seminar; Plan II skriver at mer informasjon kommer.",
      uncertainty: "PED 3616 fører seminaret under uke 36, men datoen er 16. september (uke 38)."
    },
    {
      id: "plan2-0916", date: "2026-09-16", start: "13:15", end: "15:00", subjects: ["plan2"], type: "session",
      title: "Kritisk utdanningssosiologi I: Bourdieu", room: "D131", teacher: "Håkon",
      reading: ["Bourdieu (1998), s. 1–35", "Kupfer (2015)"],
      recommended: ["Power (1999)", "Bourdieu (1998), s. 75–92"],
      note: "Utdanning som reproduksjon og symbolsk vold. Tidspunktet 13:15–15:00 står særskilt i planen."
    },
    {
      id: "p3611-0918", date: "2026-09-18", start: "08:15", end: "11:30", subjects: ["ped3611"], type: "session",
      title: "Skolebesøk: Flatåsen skole og Heimdal videregående skole", room: "Se egen kunngjøring", teacher: "",
      note: "Påmelding på grunn av skyss. D131 står i tabellens stedkolonne, men oppmøtested for besøket må sjekkes i kunngjøringen.",
      uncertainty: "Oppmøtested ikke oppgitt i planen."
    },
    {
      id: "p3616-0918", date: "2026-09-18", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Den digitalt medierte virkeligheten: Værnes flyplass", room: "D131", teacher: "Odin Fauskevåg",
      readingLabel: "Aktuelle referanser", reading: ["Bundsgaard (2022)", "Paulsen & Tække (2019)", "Turkle (2011)", "Østerud (2007)", "Buckingham (2026), kap. 9 og 10"],
      note: "Arbeid med semesteroppgaven."
    },
    {
      id: "p3611-0923", date: "2026-09-23", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Politisk styring av norsk høyere utdanning", room: "D131", teacher: "Marte Bratseth Johansen",
      reading: ["Johansen (2020)"]
    },
    {
      id: "plan2-0923", date: "2026-09-23", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Kritisk utdanningssosiologi II: Foucault, Bourdieu og Habermas", room: "D131", teacher: "Håkon",
      reading: ["Christensen (2024)", "Deacon (2006)", "Ball & Collet-Sabé (2021)"],
      recommended: ["Fleming (2010)"], note: "Disiplinering, normalisering, symbolsk vold, reproduksjon og instrumentell rasjonalitet. Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3611-0925", date: "2026-09-25", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Seminar og gjesteforelesning om kommunens ansvar for barn og unge", room: "D131", teacher: "Heidun Oldervik og Helene Berntsen Svensson",
      note: "Seminar fra 08:15: idémyldring om semesteroppgave. Gjesteforelesning fra 09:15."
    },
    {
      id: "p3616-0925", date: "2026-09-25", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Medialisering og nettverkssamfunnet", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Bundsgaard (2022)", "Hjarvard (2008)", "Castells (2008)", "Schofield (2022)"],
      note: "Arbeid med semesteroppgaven. Møte i referansegruppen."
    },
    {
      id: "p3611-0930", date: "2026-09-30", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Governmentality som perspektiv på leder, lærer og elev", room: "D131", teacher: "Heidun Oldervik",
      reading: ["Foucault (1991)", "Oldervik (2025)", "Rønningen & Djupedal (2026)"],
      recommended: ["Au (2011)", "Kruger & Trippestad (2003)", "Lindblad (2005)", "Oldervik (2014), kap. 2", "Oldervik i Volckmar (2016)"]
    },
    {
      id: "plan2-0930", date: "2026-09-30", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Digital meningsskaping i visuelle og sosiale medier", room: "D131", teacher: "Amanda",
      reading: ["Kress (2003)", "Milner (2016)", "Potter (2001)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00. Tabellen skriver «Millner», mens pensumlisten skriver «Milner». Kontroller i Canvas.",
      uncertainty: "Ulik stavemåte på Milner/Millner i kilden."
    },
    {
      id: "p3611-1002", date: "2026-10-02", start: "08:15", end: "11:00", subjects: ["ped3611"], type: "session",
      title: "Obligatorisk seminar II", room: "D131", teacher: "Håkon J. Aaltvedt og Heidun Oldervik", mandatory: true,
      note: "Oppsummering, gruppearbeid om eksamen, informasjon om skriftlig eksamen og semesteroppgave. Midtveisevaluering."
    },
    {
      id: "p3616-1002", date: "2026-10-02", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Medvirkning og deltakelse i mediesamfunnet", room: "D131", teacher: "Vegard M. Frantzen",
      readingLabel: "Aktuelle referanser", reading: ["Hoechsmann & Poyntz (2012), kap. 1, 7 og 8", "Kalsnes (2019), kap. 2 og 11", "Moe et al. (2019)"],
      note: "Arbeid med semesteroppgaven. Møte i referansegruppen."
    },
    {
      id: "p3611-exam-1013", date: "2026-10-13", subjects: ["ped3611"], type: "exam",
      title: "Fire timers skriftlig skoleeksamen", uncertainty: "Starttid og sted er ikke oppgitt i planen.", note: "Kontroller tid og sted i eksamenssystemet."
    },
    {
      id: "plan2-1014", date: "2026-10-14", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Ungdom og interaksjon i sosiale medier", room: "D131", teacher: "Amanda",
      reading: ["Aarsand & Sørenssen (2021)", "Haraway (1988)", "boyd (2014)"], recommended: ["Ahmed (2012)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3611-deadline-1015", date: "2026-10-15", start: "09:00", subjects: ["ped3611"], type: "deadline",
      title: "Lever tema og problemstilling for semesteroppgaven", room: "Canvas", note: "Tilbakemelding er planlagt 16. oktober."
    },
    {
      id: "p3616-1016", date: "2026-10-16", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Media education in the age of information disorder", room: "D131", teacher: "Reijo Kupiainen",
      readingLabel: "Aktuelle referanser", reading: ["Buckingham (2026), kap. 9 og 10", "Bundsgaard (2022)"]
    },
    {
      id: "plan2-1021", date: "2026-10-21", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Latour: kritikk av kritikk og sosiomaterialitet", room: "D131", teacher: "Håkon",
      reading: ["Latour (1992)", "Latour (2004)"], recommended: ["Latour (2003)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3616-1023", date: "2026-10-23", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Mediedanning, digital dannelse og AI literacy", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Buckingham (2026), kap. 1", "Krumsvik (2024)", "Melisa et al. (2025)", "Bundsgaard (2022)"]
    },
    {
      id: "p3611-deadline-1027", date: "2026-10-27", start: "09:00", subjects: ["ped3611"], type: "deadline",
      title: "Send inn problemstilling, innledning, disposisjon og foreløpig litteraturliste", room: "Ikke oppgitt",
      note: "Omtrent to sider. Forbered også en kort muntlig presentasjon til seminaret 30. oktober."
    },
    {
      id: "plan2-1028", date: "2026-10-28", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Sosiomaterielle perspektiver på skole og utdanning", room: "D131", teacher: "Håkon",
      reading: ["Selwyn (2024)", "Röhl (2012)", "Röhl (2025)"], recommended: ["Fenwick, Edwards & Sawchuk (2012)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3611-1030", date: "2026-10-30", start: "08:15", end: "12:00", subjects: ["ped3611"], type: "session",
      title: "Obligatorisk seminar III: muntlig framlegg og oppgaveskriving", room: "Pav B, rom 156 og 251", teacher: "Håkon J. Aaltvedt og Heidun Oldervik", mandatory: true,
      note: "Gruppeframlegg med tilbakemelding. Lunsj/pizza er inkludert i tidsrommet."
    },
    {
      id: "p3616-1030", date: "2026-10-30", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Etiske og moralske utfordringer i mediesamfunnet", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Hoechsmann & Poyntz (2012), kap. 7", "Bundsgaard (2022)", "Paulsen & Tække (2019)", "Schofield (2022)", "Buckingham (2026)"],
      note: "Ferdiggjøring av semesteroppgaven."
    },
    {
      id: "p3616-deadline-1030", date: "2026-10-30", subjects: ["ped3616"], type: "deadline",
      title: "Lever skisse til semesteroppgaven", uncertainty: "Klokkeslett og leveringssted er ikke oppgitt i planen."
    },
    {
      id: "plan2-1104", date: "2026-11-04", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Makt, kunnskap og styring I", room: "D131", teacher: "Pål",
      reading: ["Foucault (2008)", "Nicoll & Fejes (2008)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3616-1106", date: "2026-11-06", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Presentasjon av hovedpunkter til semesteroppgaven", room: "D131", teacher: "Daniel Schofield", mandatory: true,
      note: "Presentasjon og tilbakemeldinger. Planen sier at presentasjon og deltakelse i uke 45 og 46 er obligatorisk."
    },
    {
      id: "p3611-deadline-1109", date: "2026-11-09", start: "12:00", subjects: ["ped3611"], type: "deadline",
      title: "Send inn fullstendig utkast til semesteroppgaven", room: "Canvas", note: "Minst 2000 ord."
    },
    {
      id: "plan2-1111", date: "2026-11-11", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Makt, kunnskap og styring II", room: "D131", teacher: "Pål",
      reading: ["Assarsson & Aarsand (2010)"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00. Pensumlisten oppgir Assarsson & Aarsand (2011).",
      uncertainty: "Ulikt årstall (2010/2011) i forelesningsplan og pensumliste."
    },
    {
      id: "p3611-1113", date: "2026-11-13", start: "08:15", end: "12:00", subjects: ["ped3611"], type: "session",
      title: "Obligatorisk seminar IV: veiledning og gruppearbeid", room: "Pav A, rom 119 og 214", teacher: "Håkon J. Aaltvedt og Heidun Oldervik", mandatory: true,
      note: "Individuell tidsplan kommer senere. Planen nevner mulig ekstra veiledning torsdag.",
      uncertainty: "Fordeling på rom og eventuell torsdagsøkt avklares senere."
    },
    {
      id: "p3616-1113", date: "2026-11-13", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Presentasjon av hovedpunkter til semesteroppgaven", room: "D131", teacher: "Daniel Schofield", mandatory: true,
      note: "Presentasjon og tilbakemeldinger. Planen sier at presentasjon og deltakelse i uke 45 og 46 er obligatorisk."
    },
    {
      id: "plan2-1118", date: "2026-11-18", start: "12:15", end: "16:00", subjects: ["plan2"], type: "session",
      title: "Oppsummering", room: "D131", teacher: "Pål", reading: ["Alt pensum"],
      note: "Forelesning 12:15–14:00; seminar 14:15–16:00."
    },
    {
      id: "p3616-1120", date: "2026-11-20", start: "12:15", end: "15:00", subjects: ["ped3616"], type: "session",
      title: "Oppsummering og evaluering", room: "D131", teacher: "Daniel Schofield",
      readingLabel: "Aktuelle referanser", reading: ["Hele pensum"], note: "Møte med referansegruppen."
    },
    {
      id: "p3611-deadline-1127", date: "2026-11-27", start: "15:00", subjects: ["ped3611"], type: "exam",
      title: "Lever tellende semesteroppgave", room: "Inspera"
    },
    {
      id: "plan2-exam-1208", date: "2026-12-08", endDate: "2026-12-10", subjects: ["plan2"], type: "exam",
      title: "Muntlig eksamen", uncertainty: "Individuell eksamensdato og klokkeslett er ikke oppgitt.",
      note: "Planen oppgir 8.–10. desember. Seks til åtte case presenteres to uker før eksamen."
    }
  ]
};
