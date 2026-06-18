import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-impressum',
  imports: [RouterLink],          // fuer den "Zurueck"-Link
  templateUrl: './impressum.html',
})
export class Impressum {
  readonly legal = PROFILE.legal;  // Name, Anschrift, E-Mail aus der Datenquelle
}
