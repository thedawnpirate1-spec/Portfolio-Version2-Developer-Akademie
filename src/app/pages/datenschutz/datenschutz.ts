import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-datenschutz',
  imports: [],
  templateUrl: './datenschutz.html',
})
export class Datenschutz {
  readonly legal = PROFILE.legal;
}
