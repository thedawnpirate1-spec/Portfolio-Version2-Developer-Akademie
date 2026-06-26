import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.html',
})
export class Impressum {
  readonly legal = PROFILE.legal;
}
