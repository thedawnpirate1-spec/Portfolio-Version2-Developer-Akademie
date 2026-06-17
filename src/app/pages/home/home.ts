import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Work } from '../../sections/work/work';
import { References } from '../../sections/references/references';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  // Alle Sektionen: Hero, About, Skill set, My work, References, Contact.
  imports: [Hero, About, Skills, Work, References, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
