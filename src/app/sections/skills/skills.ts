import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { SKILLS } from '../../data/profile';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly skills = SKILLS;
}
