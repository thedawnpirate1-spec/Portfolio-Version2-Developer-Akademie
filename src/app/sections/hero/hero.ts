import { Component, inject } from '@angular/core';
import { SocialLinks } from '../../components/social-links/social-links';
import { PROFILE } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly name = PROFILE.name;
  readonly firstName = PROFILE.firstName;
  readonly role = PROFILE.role;
  readonly ts = inject(TranslationService);
}
