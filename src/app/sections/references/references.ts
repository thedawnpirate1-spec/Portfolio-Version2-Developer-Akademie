import { Component, inject, signal } from '@angular/core';
import { Reveal } from '../../shared/reveal';
import { REFERENCES } from '../../data/profile';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-references',
  imports: [Reveal],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  readonly references = REFERENCES;
  readonly ts = inject(TranslationService);

  // Aktive Karte im Mobile-/Tablet-Karussell. Desktop zeigt alle 3 als Grid,
  // dort wird der Index ignoriert. Per Pfeil-Buttons / Punkten wechselt man
  // von Kommentar zu Kommentar (kein Scrollbalken mehr).
  readonly activeIndex = signal(0);

  private wrap(i: number): number {
    const n = this.references.length;
    return (i % n + n) % n;                 // sauberes Umlaufen (auch bei negativ)
  }

  prev(): void {
    this.activeIndex.set(this.wrap(this.activeIndex() - 1));
  }

  next(): void {
    this.activeIndex.set(this.wrap(this.activeIndex() + 1));
  }

  goTo(i: number): void {
    this.activeIndex.set(this.wrap(i));
  }
}
