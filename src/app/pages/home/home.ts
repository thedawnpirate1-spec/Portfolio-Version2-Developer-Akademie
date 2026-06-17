import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Work } from '../../sections/work/work';

@Component({
  selector: 'app-home',
  // Erledigt: Hero, About, Skill set, My work. Naechste: References, Contact.
  imports: [Hero, About, Skills, Work],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
