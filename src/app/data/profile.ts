// =============================================================================
//  PROFIL-DATEN
//  Eine einzige Quelle der Wahrheit fuer Name, Rolle und Social-Links.
//  Komponenten importieren das hier – Aenderungen passieren NUR an dieser Stelle.
// =============================================================================

export type SocialIcon = 'github' | 'mail' | 'linkedin';

export interface SocialLink {
  label: string;     // fuer Screenreader (aria-label)
  href: string;
  icon: SocialIcon;  // bestimmt, welches SVG gerendert wird
}

export const PROFILE = {
  name: 'Leon Lammerich',
  firstName: 'Leon',                 // fuer die Hero-Begruessung "Hello! I am …"
  role: 'Frontend Developer',
  email: 'leonlammerich@gmx.de',     // fuer das Kontaktformular (mailto)
  legal: {                           // fuer Impressum + Datenschutz
    name: 'Leon Lammerich',
    street: 'Gotenweg 24',
    city: '53859 Niederkassel',
    email: 'leonlammerich@gmx.de',
    phone: '',                       // optional – leer = wird nicht angezeigt
  },
  // Reihenfolge wie im Figma-Design: GitHub, E-Mail, LinkedIn
  socials: [
    { label: 'GitHub',   href: 'https://github.com/thedawnpirate1-spec',                 icon: 'github'   },
    { label: 'E-Mail',   href: 'mailto:leonlammerich@gmx.de',                            icon: 'mail'     },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leon-lammerich-800733406/',  icon: 'linkedin' },
  ] as SocialLink[],
};

// -----------------------------------------------------------------------------
//  About-Sektion „Let's work together"
//  Standort + Verfuegbarkeit + Vorstellungstext. Text hier frei erweitern.
// -----------------------------------------------------------------------------
export const ABOUT = {
  location: 'near Bonn',   // Figma-Vorlage: "located in Munich"
  remote: true,            // -> "open to work remote"
  relocate: true,          // -> "open to relocate"
  // Jeder Eintrag = ein Absatz. Hier kannst du deinen Text spaeter ausbauen.
  paragraphs: [
    'Ich bin Programmierer geworden aufgrund der Flexibilität — der Verbindung aus kreativer Gestaltung und Problemlösung.',
  ],
};

// -----------------------------------------------------------------------------
//  Skill-Set-Sektion
//  Reihenfolge wie im Figma. icon = Dateiname in public/assets/figma/icons/.
//  Hier kannst du deine eigenen Skills ergaenzen/entfernen.
// -----------------------------------------------------------------------------
export interface Skill {
  name: string;
  icon: string;     // -> assets/figma/icons/<icon>.svg
  badge?: boolean;  // Sonderbehandlung (Growth mindset hat eigenen Schatten)
  hover?: string;   // optionales Hover-SVG -> assets/figma/icons/<hover>.svg (Crossfade)
}

export const SKILLS: Skill[] = [
  { name: 'Angular',         icon: 'angular' },
  { name: 'TypeScript',      icon: 'typescript' },
  { name: 'JavaScript',      icon: 'javascript' },
  { name: 'HTML',            icon: 'html' },
  { name: 'Supabase',        icon: 'supabase' },
  { name: 'Git',             icon: 'git' },
  { name: 'CSS',             icon: 'css' },
  { name: 'Material Design', icon: 'material-design' },
  { name: 'REST-API',        icon: 'rest-api' },
  { name: 'Scrum',           icon: 'scrum' },
  { name: 'Growth mindset',  icon: 'growth-mindset', badge: true, hover: 'growth-mindset-hover' },
];

// -----------------------------------------------------------------------------
//  My-Work-Sektion (Projekte)
//  PLATZHALTER — bitte durch deine echten Repo-Links + Screenshots ersetzen.
//  image -> Datei in public/assets/images/projects/ (sonst Platzhalter).
// -----------------------------------------------------------------------------
export interface Project {
  title: string;
  tech: string;
  description: string;
  image: string;       // assets/images/projects/<datei>
  github?: string;     // Repo-Link
  live?: string;       // Live-Demo (optional -> "Live test"-Button)
}

// -----------------------------------------------------------------------------
//  References / Testimonials („Need a teamplayer?")
//  PLATZHALTER — durch ECHTE Referenzen ersetzen (oder Sektion entfernen).
//  Erfundene Zitate gehoeren NICHT in ein echtes Portfolio.
// -----------------------------------------------------------------------------
export interface Reference {
  name: string;
  project: string;
  quote: string;
}

export const REFERENCES: Reference[] = [
  { name: '[Name der Referenz]', project: 'Projekt [Name]', quote: '„Hier kommt ein echtes Zitat einer Person hin, mit der du zusammengearbeitet hast."' },
  { name: '[Name der Referenz]', project: 'Projekt [Name]', quote: '„Ein zweites echtes Zitat — z. B. von einer Lerngruppe oder einem Praktikum."' },
  { name: '[Name der Referenz]', project: 'Projekt [Name]', quote: '„Ein drittes echtes Zitat. Wenn du keine hast, lassen wir diese Sektion weg."' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Join',
    tech: 'Angular | TypeScript | HTML | CSS | Firebase',
    description: 'Kanban-basierter Task-Manager: Aufgaben per Drag & Drop anlegen, Nutzer und Kategorien zuweisen.',
    image: 'assets/images/projects/placeholder.svg',
    github: '#',
    live: '#',
  },
  {
    title: 'El Pollo Loco',
    tech: 'JavaScript | HTML | CSS',
    description: 'Jump-’n’-Run-Spiel auf Basis objektorientierter Programmierung.',
    image: 'assets/figma/my-work/el-pollo-loco.svg',
    github: '#',
    live: '#',
  },
  {
    title: 'DA Bubble',
    tech: 'Angular | TypeScript | HTML | CSS | Firebase',
    description: 'Slack-ähnliche Chat-Anwendung mit Echtzeit-Nachrichten und Kanälen.',
    image: 'assets/images/projects/placeholder.svg',
    github: '#',
    live: '#',
  },
  {
    title: 'Pokédex',
    tech: 'JavaScript | HTML | CSS | REST-API',
    description: 'Pokémon-Lexikon, das Daten live aus der PokéAPI lädt und katalogisiert.',
    image: 'assets/images/projects/placeholder.svg',
    github: '#',
    live: '#',
  },
];
