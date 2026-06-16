import { Component, input } from '@angular/core';
import { PROFILE, SocialLink } from '../../data/profile';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  // input() = moderner Signal-Input (Angular 17+). Aufrufer koennen eigene Links
  // uebergeben; sonst gilt der Standard aus PROFILE.
  readonly links = input<SocialLink[]>(PROFILE.socials);

  // Steuert die Anordnung: senkrecht (Hero, rechte Kante) oder waagerecht (Footer).
  readonly orientation = input<'vertical' | 'horizontal'>('vertical');
}
