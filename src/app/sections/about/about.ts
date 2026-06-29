import { Component, inject } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { ABOUT } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Reveal, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = ABOUT;
  readonly ts = inject(TranslationService);
}
