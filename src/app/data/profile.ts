export type SocialIcon = 'github' | 'mail' | 'linkedin';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const PROFILE = {
  name: 'Leon Lammerich',
  firstName: 'Leon',
  role: 'Frontend Developer',
  email: 'leonlammerich@gmx.de',
  legal: {
    name: 'Leon Lammerich',
    street: 'Gotenweg 24',
    city: '53859 Niederkassel',
    email: 'leonlammerich@gmx.de',
    phone: '',
  },

  socials: [
    { label: 'GitHub',   href: 'https://github.com/thedawnpirate1-spec',                 icon: 'github'   },
    { label: 'E-Mail',   href: 'mailto:leonlammerich@gmx.de',                            icon: 'mail'     },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leon-lammerich-800733406/',  icon: 'linkedin' },
  ] as SocialLink[],
};

export const ABOUT = {
  location: 'near Bonn',
  remote: true,
  relocate: true,

  paragraphs: [
    'Ich bin Programmierer geworden aufgrund der Flexibilität — der Verbindung aus kreativer Gestaltung und Problemlösung.',
  ],
};

export interface Skill {
  name: string;
  icon: string;
  badge?: boolean;
  hover?: string;
}

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'Angular',         icon: 'angular' },
  { name: 'Vue.js',          icon: 'vue js' },
  { name: 'TypeScript',      icon: 'typescript' },
  { name: 'JavaScript',      icon: 'javascript' },
  { name: 'HTML',            icon: 'html' },
  { name: 'CSS',             icon: 'css' },
  { name: 'Material Design', icon: 'material des' },
  { name: 'WordPress',       icon: 'wordpress' },

  // Backend & Database
  { name: 'Python',          icon: 'Python' },
  { name: 'Django',          icon: 'Django' },
  { name: 'Flask',           icon: 'Flask' },
  { name: 'SQL',             icon: 'SQL' },
  { name: 'PostgreSQL',      icon: 'PostgreSQL' },
  { name: 'Redis',           icon: 'Redis' },
  { name: 'Supabase',        icon: 'superbase' },
  { name: 'Firebase',        icon: 'firebase' },

  // Tools
  { name: 'Growth mindset',  icon: 'growth-mindset', badge: true, hover: 'hover-info-grow-mindset' },
];

export interface Project {
  title: string;
  tech: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
}

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
    image: 'assets/images/projects/join.png',
    github: 'https://github.com/thedawnpirate1-spec/Join',
    live: 'https://thedawnpirate1-spec.github.io/Join',
  },
  {
    title: 'El Pollo Loco',
    tech: 'JavaScript | HTML | CSS',
    description: 'Jump-’n’-Run-Spiel auf Basis objektorientierter Programmierung.',
    image: 'assets/figma/my-work/el-pollo-loco.svg',
    github: 'https://github.com/thedawnpirate1-spec/El-pollo-Loco',
    live: 'https://elpolloloco.vercel.app',
  },

  {
    title: 'Pokédex',
    tech: 'JavaScript | HTML | CSS | REST-API',
    description: 'Pokémon-Lexikon, das Daten live aus der PokéAPI lädt und katalogisiert.',
    image: 'assets/images/projects/pokedex.png',
    github: 'https://github.com/thedawnpirate1-spec/pokemon',
    live: 'https://poke-hkw3l47nm-thedawnpirate1-3413s-projects.vercel.app/',
  },
];
