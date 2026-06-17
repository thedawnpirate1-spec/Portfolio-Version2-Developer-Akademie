import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { REFERENCES } from '../../data/profile';

@Component({
  selector: 'app-references',
  imports: [Reveal],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  readonly references = REFERENCES;
}
