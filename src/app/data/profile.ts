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
  // Reihenfolge wie im Figma-Design: GitHub, E-Mail, LinkedIn
  socials: [
    { label: 'GitHub',   href: 'https://github.com/thedawnpirate1-spec',                 icon: 'github'   },
    { label: 'E-Mail',   href: 'mailto:leonlammerich@gmx.de',                            icon: 'mail'     },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leon-lammerich-800733406/',  icon: 'linkedin' },
  ] as SocialLink[],
};
