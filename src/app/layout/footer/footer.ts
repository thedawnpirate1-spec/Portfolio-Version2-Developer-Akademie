import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinks } from '../../components/social-links/social-links';
import { PROFILE } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks, RouterLink],   // SocialLinks + routerLink fuer die Rechtsseiten
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly name = PROFILE.name;
  readonly year = new Date().getFullYear();   // Copyright-Jahr bleibt automatisch aktuell
  readonly ts = inject(TranslationService);

  // Sanft nach ganz oben scrollen. 'smooth' nutzt dieselbe weiche Bewegung
  // wie die Nav-Links.
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
