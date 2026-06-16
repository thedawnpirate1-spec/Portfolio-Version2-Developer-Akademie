import { Component, HostListener, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly name = PROFILE.name;

  // Signal = reaktiver Wert. Aendert er sich, rendert Angular die Stellen neu,
  // die ihn lesen (hier die [class.is-scrolled]-Bindung im Template).
  readonly scrolled = signal(false);

  // @HostListener haengt einen Event-Listener an das Fenster.
  // Bei jedem Scroll pruefen wir die Scroll-Position und setzen das Signal.
  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }
}
