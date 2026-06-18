import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-datenschutz',
  imports: [RouterLink],
  templateUrl: './datenschutz.html',
})
export class Datenschutz {
  readonly legal = PROFILE.legal;
}
