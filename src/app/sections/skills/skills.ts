import { Component, inject } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { SKILLS } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly skills = SKILLS;
  readonly ts = inject(TranslationService);
}
