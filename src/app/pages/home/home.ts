import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';

@Component({
  selector: 'app-home',
  // Hier sammeln wir nach und nach alle Sektionen ein.
  // Erledigt: Hero, About. Naechste: Skill set, My work, References, Contact.
  imports: [Hero, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
