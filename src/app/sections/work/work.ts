import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { PROJECTS } from '../../data/profile';

@Component({
  selector: 'app-work',
  imports: [Reveal],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  readonly projects = PROJECTS;
}
