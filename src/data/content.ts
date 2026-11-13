export const languages = {
  sk: 'Slovenčina',
  en: 'English',
  de: 'Deutsch',
} as const;

export type Language = keyof typeof languages;

interface Service {
  title: string;
  description: string;
  items: string[];
}

interface Content {
  title: string;
  description: string;
  skip: string;
  nav: [string, string, string, string, string];
  inquiry: string;
  menu: string;
  close: string;
  language: string;
  eyebrow: string;
  headline: [string, string, string];
  intro: string;
  explore: string;
  since: string;
  photo: string;
  scroll: string;
  stats: [string, string, string, string];
  servicesLabel: string;
  servicesTitle: string;
  servicesIntro: string;
  learnMore: string;
  services: [Service, Service, Service];
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutNote: string;
  facility: string;
  techLabel: string;
  techTitle: string;
  techIntro: string;
  techGroups: { title: string; text: string }[];
  qualityLabel: string;
  qualityTitle: string;
  qualityText: string;
  qualityPoints: string[];
  qualityAlt: string;
  referencesLabel: string;
  referencesTitle: string;
  referencesText: string;
  sectors: string[];
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  email: string;
  phone: string;
  address: string;
  directions: string;
  emailSubject: string;
  footer: string;
  rights: string;
  preview: string;
}

export const content: Record<Language, Content> = {
  sk: {
    title: 'LAGO Nástrojáreň — Presnosť, ktorá tvorí hodnotu.',
    description: 'Konštrukcia a výroba nástrojov, foriem a presných súčiastok. CNC obrábanie a kontrola kvality vo Veľkom Rovnom od roku 1997.',
    skip: 'Prejsť na obsah',
    nav: ['O nás', 'Výroba', 'Technológie', 'Kvalita', 'Referencie'],
    inquiry: 'Mám záujem o spoluprácu',
    menu: 'Menu',
    close: 'Zavrieť',
    language: 'Jazyk',
    eyebrow: 'SLOVENSKÁ PRECÍZNOSŤ. OD ROKU 1997.',
    headline: ['Vaša vízia.', 'Naše nástroje.', 'Spoločný výsledok.'],
    intro: 'Od prvého návrhu po posledný detail. Vyrábame nástroje, formy a presné súčiastky, na ktoré sa môžete spoľahnúť.',
    explore: 'Objavte naše možnosti',
    since: 'Strojárstvo s tradíciou',
    photo: 'Detail z nášho strojového parku',
    scroll: 'Presnosť začína tu',
    stats: ['Rok založenia spoločnosti', 'CNC obrábanie v 5 osiach', 'Lisovanie do 1 000 ton', 'Tradícia strojárstva v regióne'],
    servicesLabel: '01 / ČO DOKÁŽEME',
    servicesTitle: 'Od nápadu k presnému riešeniu.',
    servicesIntro: 'Konštrukcia, výroba aj následný servis. Všetko pod jednou strechou, s pozornosťou ku každému detailu.',
    learnMore: 'Preskúmať možnosti',
    services: [
      { title: 'Nástroje a formy', description: 'Premeníme technické zadanie na nástroj, ktorý obstojí v reálnej výrobe.', items: ['Konštrukcia a výroba strihových, ťahových, postupových a blokových nástrojov', 'Nástroje na obstrihy hliníkových výliskov a výkovkov', 'Formy na plasty, gumu, tlakové liatie hliníka a vosk', 'Prípravky, presné súčiastky a náhradné i montážne diely', 'Opravy, úpravy a údržba nástrojov a foriem'] },
      { title: 'Presné obrábanie', description: 'Moderné CNC technológie a skúsení ľudia. Aj pre vaše náročné súčiastky.', items: ['3-, 4- a 5-osé CNC frézovanie', 'CNC sústruženie s poháňanými nástrojmi', 'Elektroerozívne drôtové rezanie a hĺbenie', 'Brúsenie na plocho, na guľato, tvarové brúsenie a brúsenie otvorov', 'Komponenty a celky do liniek a valcovacích tratí'] },
      { title: 'Komplexná výroba', description: 'Od lisovania cez zváranie až po povrchovú úpravu. Viac možností pre váš projekt.', items: ['Lisovanie plechových dielov do 1 000 t a hlbokoťažné lisovanie s pridržiavaním do 250 t', 'Lisovanie plastových súčiastok a výroba plechových výrobkov', 'Zvarence z ocele, hliníka a antikoru; CO a TIG zváranie', 'Laserové a mikrotigové naváranie, opravy a laserové gravírovanie', 'Povrchové úpravy práškovou farbou'] },
    ],
    aboutLabel: '02 / KTO SME',
    aboutTitle: 'Silné zázemie. Ľudia, na ktorých záleží.',
    aboutText: 'Sme LAGO Nástrojáreň z Veľkého Rovného. Od roku 1997 spájame strojársku tradíciu nášho regiónu s novými technológiami. Za každým nástrojom stojí skúsenosť našich technických a výrobných pracovníkov.',
    aboutNote: 'Individuálny prístup. Komplexné služby. Dlhodobá spolupráca.',
    facility: 'Náš výrobný areál, Veľké Rovné',
    techLabel: '03 / TECHNOLÓGIE',
    techTitle: 'Správna technológia pre váš ďalší krok.',
    techIntro: 'Výkonný strojový park, CAD/CAM pracoviská a kvalifikovaný tím. Od menších presných dielov až po rozmerné nástroje.',
    techGroups: [
      { title: 'CNC frézovanie a sústruženie', text: '3-, 4- a 5-osé obrábanie. Frézovanie do 2 300 × 1 200 mm a 15 000 kg; 5-osé centrum do 1 100 × 900 mm a 1 200 kg. CNC sústruhy do Ø 630 × 1 000 mm.' },
      { title: 'Elektroerózia a presné brúsenie', text: 'Drôtové rezanie do 1 500 × 1 200 × 500 mm / 5 000 kg. Hĺbenie do 2 500 × 1 600 mm / 12 000 kg. Brúsenie na plocho do 2 000 × 1 250 mm, na guľato do Ø 630 × 2 000 mm.' },
      { title: 'Lisovanie a spracovanie plechu', text: 'Kľukové lisy 30–400 t, hydraulické lisy do 1 000 t. CNC ohraňovanie 120 t / 3 000 mm, ohýbanie do 2 000 mm a nožnice 6 × 3 000 / 8 × 2 500 mm. Lis na plasty 370 g.' },
      { title: 'Zváranie, opravy a povrchové úpravy', text: 'Laserové a mikrotigové naváranie, CO a TIG zváranie. Tušírovacie lisy 2 000 × 1 000 mm / 100 t a 3 000 × 1 600 mm / 1 000 t. Práškové lakovanie a laserové gravírovanie.' },
      { title: 'Konštrukcia a CAD/CAM', text: 'Návrh a príprava výroby s pracoviskami Surf-CAM, KEY CREATOR, SolidWorks a Edgecam. Klasické frézovanie, vŕtanie a presné vyvrtávanie vrátane hlbokého vŕtania do 1 000 mm.' },
    ],
    qualityLabel: '04 / KVALITA BEZ KOMPROMISOV',
    qualityTitle: 'Na detailoch záleží. Na každom jednom.',
    qualityText: 'Kontrola nie je len posledným krokom. Je súčasťou celého výrobného procesu. Opakovaným meraním rozmerov minimalizujeme nepresnosti ešte počas výroby.',
    qualityPoints: ['3D meranie ABERLINK AXION', 'Súradnicový merací stroj ZEISS CONTURA G2', 'Priebežná rozmerová kontrola vo výrobe'],
    qualityAlt: 'Kontrola rozmerov v meracom pracovisku LAGO',
    referencesLabel: '05 / SKÚSENOSTI NAPRIEČ ODVETVIAMI',
    referencesTitle: 'Naša práca. Súčasť väčšieho celku.',
    referencesText: 'Výber z referencií uvedených na pôvodnej stránke spoločnosti.',
    sectors: ['Automobilový priemysel', 'Ložiskový priemysel', 'Presné liatie', 'Gumárenský priemysel'],
    contactLabel: 'POĎME TVORIŤ SPOLU',
    contactTitle: 'Dobrý výsledok začína rozhovorom.',
    contactText: 'Máte technické zadanie alebo hľadáte výrobného partnera? Napíšte nám. Spoločne nájdeme cestu od vášho nápadu k hotovému dielu.',
    email: 'Napíšte nám',
    phone: 'Zavolajte nám',
    address: 'Nájdete nás',
    directions: 'Naplánovať cestu',
    emailSubject: 'Dopyt na spoluprácu — LAGO',
    footer: 'Precíznosť má svoje miesto.',
    rights: 'Všetky práva vyhradené.',
    preview: 'Dizajnový náhľad',
  },
  en: {
    title: 'LAGO Toolmaking — Precision that creates value.',
    description: 'Design and manufacture of tools, moulds and precision components. CNC machining and quality control in Veľké Rovné, Slovakia, since 1997.',
    skip: 'Skip to content',
    nav: ['About us', 'Production', 'Technology', 'Quality', 'References'],
    inquiry: 'Let’s work together',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    eyebrow: 'SLOVAK PRECISION. SINCE 1997.',
    headline: ['Your vision.', 'Our tools.', 'Shared success.'],
    intro: 'From the first design to the finest detail. We make tools, moulds and precision components you can rely on.',
    explore: 'Explore our capabilities',
    since: 'Engineering with a heritage',
    photo: 'A closer look at our machining equipment',
    scroll: 'Precision starts here',
    stats: ['Year our company was founded', '5-axis CNC machining', 'Pressing up to 1,000 tonnes', 'Regional engineering heritage'],
    servicesLabel: '01 / WHAT WE DO',
    servicesTitle: 'From an idea to a precise solution.',
    servicesIntro: 'Design, manufacturing and ongoing maintenance. All under one roof, with attention to every detail.',
    learnMore: 'Explore capabilities',
    services: [
      { title: 'Tools & moulds', description: 'Turning your technical brief into tooling built for real production.', items: ['Design and manufacture of cutting, drawing, progressive and block tools', 'Trimming tools for aluminium castings and forgings', 'Moulds for plastics, rubber, aluminium die casting and wax', 'Jigs, precision components, spare and assembly parts', 'Repair, modification and maintenance of tools and moulds'] },
      { title: 'Precision machining', description: 'Modern CNC technology and experienced people. Ready for demanding components.', items: ['3-, 4- and 5-axis CNC milling', 'CNC turning with driven tools', 'Wire and die-sinking electrical discharge machining', 'Surface, cylindrical, profile and internal grinding', 'Components and assemblies for production and rolling lines'] },
      { title: 'Complete manufacturing', description: 'From pressing and welding to surface finishing. More possibilities for your project.', items: ['Sheet-metal pressing up to 1,000 t and deep drawing with holding up to 250 t', 'Plastic pressing and sheet-metal products', 'Steel, aluminium and stainless-steel weldments; CO and TIG welding', 'Laser and micro-TIG build-up welding, repairs and laser engraving', 'Powder coating'] },
    ],
    aboutLabel: '02 / WHO WE ARE',
    aboutTitle: 'Solid foundations. People who make the difference.',
    aboutText: 'We are LAGO Toolmaking, based in Veľké Rovné, Slovakia. Since 1997, we have combined our region’s engineering heritage with new technologies. Behind every tool is the experience of our technical and manufacturing teams.',
    aboutNote: 'A personal approach. Comprehensive services. Lasting partnerships.',
    facility: 'Our manufacturing site, Veľké Rovné',
    techLabel: '03 / TECHNOLOGY',
    techTitle: 'The right technology for your next step.',
    techIntro: 'Capable machinery, CAD/CAM workstations and a qualified team. From small precision parts to large-scale tooling.',
    techGroups: [
      { title: 'CNC milling & turning', text: '3-, 4- and 5-axis machining. Milling up to 2,300 × 1,200 mm and 15,000 kg; 5-axis centre up to 1,100 × 900 mm and 1,200 kg. CNC lathes up to Ø 630 × 1,000 mm.' },
      { title: 'EDM & precision grinding', text: 'Wire EDM up to 1,500 × 1,200 × 500 mm / 5,000 kg. Die sinking up to 2,500 × 1,600 mm / 12,000 kg. Surface grinding up to 2,000 × 1,250 mm; cylindrical grinding up to Ø 630 × 2,000 mm.' },
      { title: 'Pressing & sheet-metal processing', text: 'Crank presses 30–400 t, hydraulic presses up to 1,000 t. CNC bending 120 t / 3,000 mm, sheet bending up to 2,000 mm and shears 6 × 3,000 / 8 × 2,500 mm. Plastics press 370 g.' },
      { title: 'Welding, repairs & finishing', text: 'Laser and micro-TIG build-up welding, CO and TIG welding. Spotting presses 2,000 × 1,000 mm / 100 t and 3,000 × 1,600 mm / 1,000 t. Powder coating and laser engraving.' },
      { title: 'Design & CAD/CAM', text: 'Design and production preparation with Surf-CAM, KEY CREATOR, SolidWorks and Edgecam. Conventional milling, drilling and precision boring, including deep drilling up to 1,000 mm.' },
    ],
    qualityLabel: '04 / QUALITY IN EVERY DETAIL',
    qualityTitle: 'Details matter. Every single one.',
    qualityText: 'Inspection is not just the final step. It is part of the entire manufacturing process. Repeated dimensional checks help us minimise inaccuracies during production.',
    qualityPoints: ['ABERLINK AXION 3D measurement', 'ZEISS CONTURA G2 coordinate measuring machine', 'In-process dimensional inspection'],
    qualityAlt: 'Dimensional inspection at the LAGO measurement workstation',
    referencesLabel: '05 / EXPERIENCE ACROSS INDUSTRIES',
    referencesTitle: 'Our work. Part of a bigger picture.',
    referencesText: 'Selected references listed on the company’s original website.',
    sectors: ['Automotive', 'Bearings', 'Precision casting', 'Rubber industry'],
    contactLabel: 'LET’S BUILD SOMETHING TOGETHER',
    contactTitle: 'A great result starts with a conversation.',
    contactText: 'Have a technical brief or need a manufacturing partner? Get in touch. Together, we can take your idea through to a finished part.',
    email: 'Write to us',
    phone: 'Call us',
    address: 'Find us',
    directions: 'Get directions',
    emailSubject: 'Manufacturing enquiry — LAGO',
    footer: 'Precision has a place.',
    rights: 'All rights reserved.',
    preview: 'Design preview',
  },
  de: {
    title: 'LAGO Werkzeugbau — Präzision, die Werte schafft.',
    description: 'Konstruktion und Fertigung von Werkzeugen, Formen und Präzisionsteilen. CNC-Bearbeitung in Veľké Rovné, Slowakei, seit 1997.',
    skip: 'Zum Inhalt springen',
    nav: ['Über uns', 'Produktion', 'Technologie', 'Qualität', 'Referenzen'],
    inquiry: 'Zusammenarbeit anfragen',
    menu: 'Menü',
    close: 'Schließen',
    language: 'Sprache',
    eyebrow: 'SLOWAKISCHE PRÄZISION. SEIT 1997.',
    headline: ['Ihre Vision.', 'Unsere Werkzeuge.', 'Gemeinsamer Erfolg.'],
    intro: 'Vom ersten Entwurf bis ins kleinste Detail. Wir fertigen Werkzeuge, Formen und Präzisionsteile, auf die Sie sich verlassen können.',
    explore: 'Unsere Möglichkeiten entdecken',
    since: 'Maschinenbau mit Tradition',
    photo: 'Ein Einblick in unseren Maschinenpark',
    scroll: 'Präzision beginnt hier',
    stats: ['Gründungsjahr des Unternehmens', '5-Achs-CNC-Bearbeitung', 'Pressen bis 1.000 Tonnen', 'Maschinenbautradition der Region'],
    servicesLabel: '01 / WAS WIR LEISTEN',
    servicesTitle: 'Von der Idee zur präzisen Lösung.',
    servicesIntro: 'Konstruktion, Fertigung und Wartung. Alles unter einem Dach, mit Aufmerksamkeit für jedes Detail.',
    learnMore: 'Möglichkeiten entdecken',
    services: [
      { title: 'Werkzeuge & Formen', description: 'Aus Ihrer technischen Vorgabe wird ein Werkzeug für den realen Produktionseinsatz.', items: ['Konstruktion und Fertigung von Schneid-, Zieh-, Folgeverbund- und Blockwerkzeugen', 'Beschnittwerkzeuge für Aluminiumgussteile und Schmiedestücke', 'Formen für Kunststoff, Gummi, Aluminiumdruckguss und Wachs', 'Vorrichtungen, Präzisions-, Ersatz- und Montageteile', 'Reparatur, Änderung und Wartung von Werkzeugen und Formen'] },
      { title: 'Präzisionsbearbeitung', description: 'Moderne CNC-Technologie und erfahrene Fachkräfte. Auch für anspruchsvolle Bauteile.', items: ['3-, 4- und 5-Achs-CNC-Fräsen', 'CNC-Drehen mit angetriebenen Werkzeugen', 'Draht- und Senkerodieren', 'Flach-, Rund-, Profil- und Innenschleifen', 'Komponenten und Baugruppen für Produktions- und Walzlinien'] },
      { title: 'Umfassende Fertigung', description: 'Vom Pressen über das Schweißen bis zur Oberfläche. Mehr Möglichkeiten für Ihr Projekt.', items: ['Blechpressen bis 1.000 t und Tiefziehen mit Niederhalter bis 250 t', 'Kunststoffpressen und Blechprodukte', 'Schweißkonstruktionen aus Stahl, Aluminium und Edelstahl; CO- und WIG-Schweißen', 'Laser- und Mikro-WIG-Auftragsschweißen, Reparaturen und Lasergravur', 'Pulverbeschichtung'] },
    ],
    aboutLabel: '02 / WER WIR SIND',
    aboutTitle: 'Eine starke Basis. Menschen, die den Unterschied machen.',
    aboutText: 'Wir sind LAGO Werkzeugbau aus Veľké Rovné in der Slowakei. Seit 1997 verbinden wir die Maschinenbautradition unserer Region mit neuen Technologien. Hinter jedem Werkzeug steht die Erfahrung unserer Fachkräfte.',
    aboutNote: 'Persönliche Betreuung. Umfassender Service. Langfristige Zusammenarbeit.',
    facility: 'Unser Produktionsstandort, Veľké Rovné',
    techLabel: '03 / TECHNOLOGIE',
    techTitle: 'Die richtige Technologie für Ihren nächsten Schritt.',
    techIntro: 'Ein leistungsfähiger Maschinenpark, CAD/CAM-Arbeitsplätze und ein qualifiziertes Team. Von kleinen Präzisionsteilen bis zu großen Werkzeugen.',
    techGroups: [
      { title: 'CNC-Fräsen & Drehen', text: '3-, 4- und 5-Achs-Bearbeitung. Fräsen bis 2.300 × 1.200 mm und 15.000 kg; 5-Achs-Zentrum bis 1.100 × 900 mm und 1.200 kg. CNC-Drehmaschinen bis Ø 630 × 1.000 mm.' },
      { title: 'Erodieren & Präzisionsschleifen', text: 'Drahterodieren bis 1.500 × 1.200 × 500 mm / 5.000 kg. Senkerodieren bis 2.500 × 1.600 mm / 12.000 kg. Flachschleifen bis 2.000 × 1.250 mm, Rundschleifen bis Ø 630 × 2.000 mm.' },
      { title: 'Pressen & Blechbearbeitung', text: 'Exzenterpressen 30–400 t, hydraulische Pressen bis 1.000 t. CNC-Abkanten 120 t / 3.000 mm, Biegen bis 2.000 mm und Scheren 6 × 3.000 / 8 × 2.500 mm. Kunststoffpresse 370 g.' },
      { title: 'Schweißen, Reparaturen & Oberflächen', text: 'Laser- und Mikro-WIG-Auftragsschweißen, CO- und WIG-Schweißen. Tuschierpressen 2.000 × 1.000 mm / 100 t und 3.000 × 1.600 mm / 1.000 t. Pulverbeschichtung und Lasergravur.' },
      { title: 'Konstruktion & CAD/CAM', text: 'Konstruktion und Fertigungsvorbereitung mit Surf-CAM, KEY CREATOR, SolidWorks und Edgecam. Konventionelles Fräsen, Bohren und Präzisionsbohren einschließlich Tiefbohren bis 1.000 mm.' },
    ],
    qualityLabel: '04 / QUALITÄT IN JEDEM DETAIL',
    qualityTitle: 'Details zählen. Jedes einzelne.',
    qualityText: 'Kontrolle ist nicht nur der letzte Schritt, sondern Teil des gesamten Fertigungsprozesses. Wiederholte Maßkontrollen helfen uns, Ungenauigkeiten bereits während der Fertigung zu minimieren.',
    qualityPoints: ['ABERLINK AXION 3D-Messtechnik', 'ZEISS CONTURA G2 Koordinatenmessgerät', 'Fertigungsbegleitende Maßkontrolle'],
    qualityAlt: 'Maßkontrolle am LAGO-Messarbeitsplatz',
    referencesLabel: '05 / ERFAHRUNG IN VIELEN BRANCHEN',
    referencesTitle: 'Unsere Arbeit. Teil eines größeren Ganzen.',
    referencesText: 'Ausgewählte Referenzen der ursprünglichen Unternehmenswebsite.',
    sectors: ['Automobilindustrie', 'Wälzlagerindustrie', 'Präzisionsguss', 'Gummiindustrie'],
    contactLabel: 'GEMEINSAM ETWAS SCHAFFEN',
    contactTitle: 'Ein gutes Ergebnis beginnt mit einem Gespräch.',
    contactText: 'Sie haben eine technische Aufgabe oder suchen einen Fertigungspartner? Schreiben Sie uns. Gemeinsam finden wir den Weg von Ihrer Idee zum fertigen Bauteil.',
    email: 'Schreiben Sie uns',
    phone: 'Rufen Sie uns an',
    address: 'Hier finden Sie uns',
    directions: 'Route planen',
    emailSubject: 'Anfrage zur Zusammenarbeit — LAGO',
    footer: 'Präzision hat einen Standort.',
    rights: 'Alle Rechte vorbehalten.',
    preview: 'Designvorschau',
  },
};
