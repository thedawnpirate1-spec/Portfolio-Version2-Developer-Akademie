import { Component, inject } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { PROJECTS } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-work',
  imports: [Reveal],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  readonly projects = PROJECTS;
  readonly ts = inject(TranslationService);

  getProjectDescKey(title: string): string {
    const keyMap: Record<string, string> = {
      'Join': 'PROJECT_JOIN_DESC',
      'El Pollo Loco': 'PROJECT_POLLO_DESC',
      'Pokédex': 'PROJECT_POKEDEX_DESC',
    };
    return keyMap[title] || '';
  }
}
