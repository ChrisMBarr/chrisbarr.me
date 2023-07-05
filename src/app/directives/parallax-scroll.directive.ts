import { Directive, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appParallaxScroll]',
})
export class ParallaxScrollDirective implements OnInit {
  private readonly window: Window = this.document.defaultView as Window;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.onWindowScroll(true);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(force = false): void {
    //add check to prevent error when building prerendered views
    if (typeof this.el.nativeElement.getBoundingClientRect === 'function') {
      const rect = this.el.nativeElement.getBoundingClientRect();

      if (force || rect.top < this.window.innerHeight) {
        const scrollableDistance = this.window.innerHeight + rect.height;
        const scrolled = this.window.innerHeight - rect.top;
        //don't go over 100% - can happen with elastic scroll on touch devices
        const pct = Math.min((scrolled / scrollableDistance) * 100, 100);
        const invertedPct = 100 - pct;

        this.el.nativeElement.style.backgroundPositionY = `${invertedPct}%`;
      }
    }
  }
}
