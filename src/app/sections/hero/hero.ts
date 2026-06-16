import { Component } from '@angular/core';
import { SocialLinks } from '../../components/social-links/social-links';
import { PROFILE } from '../../data/profile';

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
}
