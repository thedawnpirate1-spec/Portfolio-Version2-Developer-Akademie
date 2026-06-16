import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';

@Component({
  selector: 'app-home',
  // Erledigt: Hero, About, Skill set. Naechste: My work, References, Contact.
  imports: [Hero, About, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
