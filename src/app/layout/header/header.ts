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
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
    if (this.menuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      document.body.style.overflow = '';
    }
  }
}
