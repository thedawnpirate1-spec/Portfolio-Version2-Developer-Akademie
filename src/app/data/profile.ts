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
  name: 'Leon Lammerich',                 // ← hier deinen Vornamen eintragen
  role: 'Frontend Developer',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/',        icon: 'github'   },
    { label: 'E-Mail',   href: 'mailto:hallo@example.com',   icon: 'mail'     },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/',  icon: 'linkedin' },
  ] as SocialLink[],
};
