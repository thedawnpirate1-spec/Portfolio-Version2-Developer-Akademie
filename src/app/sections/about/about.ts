import { Component, inject } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { ABOUT } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = ABOUT;
  readonly ts = inject(TranslationService);
}
