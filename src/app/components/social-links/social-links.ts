import { Component, input } from '@angular/core';
import { PROFILE, SocialLink } from '../../data/profile';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {

  readonly links = input<SocialLink[]>(PROFILE.socials);

  readonly orientation = input<'vertical' | 'horizontal'>('vertical');

  getNormalIconName(icon: string): string {
    if (icon === 'mail') return 'e-mail-normal';
    return `${icon}-normal`;
  }

  getHoverIconName(icon: string): string {
    if (icon === 'mail') return 'email-hover';
    return `${icon}-hover`;
  }
}
