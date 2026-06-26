import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinks } from '../../components/social-links/social-links';
import { PROFILE } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly name = PROFILE.name;
  readonly year = new Date().getFullYear();
  readonly ts = inject(TranslationService);

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
