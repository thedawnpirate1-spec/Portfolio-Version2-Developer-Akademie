import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

// =============================================================================
//  appReveal – Scroll-Reveal-Direktive
//  Haengt man an ein Element (<div appReveal>), blendet es sich weich ein,
//  SOBALD es beim Scrollen in den sichtbaren Bereich kommt.
//
//  Technik: IntersectionObserver. Der Browser meldet uns selbst, wenn ein
//  Element den Viewport "schneidet" – effizienter als ein scroll-Listener,
//  weil der Browser das im Hintergrund optimiert (kein Dauer-Feuern bei jedem
//  Pixel Scroll).
// =============================================================================
@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnInit, OnDestroy {
  // ElementRef = Zugriff auf das echte DOM-Element, an dem die Direktive haengt.
  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement;

    // Startzustand: Klasse 'reveal' macht das Element unsichtbar + leicht nach
    // unten versetzt (definiert global in styles.scss).
    el.classList.add('reveal');

    // Der Observer beobachtet das Element. Callback laeuft, wenn sich die
    // Sichtbarkeit aendert.
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Element ist im Bild -> sichtbar schalten (CSS faedelt es ein).
            el.classList.add('is-visible');
            // Einmal reicht: nicht mehr weiter beobachten (Animation soll
            // nicht jedes Mal neu starten beim Hoch-/Runterscrollen).
            this.observer?.unobserve(el);
          }
        }
      },
      // threshold 0.15 = ausloesen, wenn 15 % des Elements sichtbar sind.
      { threshold: 0.15 },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    // Aufraeumen, damit kein Observer im Speicher haengen bleibt.
    this.observer?.disconnect();
  }
}
