import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Work } from '../../sections/work/work';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  // Erledigt: Hero, About, Skill set, My work, Contact. Offen: References.
  imports: [Hero, About, Skills, Work, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
