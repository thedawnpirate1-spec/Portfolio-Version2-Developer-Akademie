import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { ABOUT } from '../../data/profile';

@Component({
  selector: 'app-about',
  imports: [Reveal],   // appReveal-Direktive fuer die Scroll-Einblendung
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = ABOUT;   // Standort, Verfuegbarkeit, Absaetze aus der Datenquelle
}
