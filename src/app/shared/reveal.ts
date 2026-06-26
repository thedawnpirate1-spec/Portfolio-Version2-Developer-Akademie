import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnInit, OnDestroy {

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement;

    el.classList.add('reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {

            el.classList.add('is-visible');

            this.observer?.unobserve(el);
          }
        }
      },

      { threshold: 0.15 },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {

    this.observer?.disconnect();
  }
}
