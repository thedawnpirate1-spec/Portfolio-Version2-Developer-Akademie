import { Component } from '@angular/core';
import { SocialLinks } from '../../components/social-links/social-links';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks],   // wir nutzen die wiederverwendbare Social-Links-Komponente
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly name = PROFILE.name;
  readonly year = new Date().getFullYear();   // Copyright-Jahr bleibt automatisch aktuell

  // Sanft nach ganz oben scrollen. 'smooth' nutzt dieselbe weiche Bewegung
  // wie die Nav-Links.
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
