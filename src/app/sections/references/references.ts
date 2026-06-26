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

  readonly activeIndex = signal(0);

  private wrap(i: number): number {
    const n = this.references.length;
    return (i % n + n) % n;
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
