import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';

@Component({
  selector: 'app-home',
  // Hier sammeln wir nach und nach alle Sektionen ein.
  // Push 2: Hero. Spaeter: About, Skill set, My work, Contact.
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
