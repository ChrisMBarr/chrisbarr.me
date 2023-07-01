import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallaxScroll]',
})
export class ParallaxScrollDirective {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(ev: Event): void {
    const win = ev.currentTarget as Window;
    const rect = this.el.nativeElement.getBoundingClientRect();

    if (rect.top < win.innerHeight) {
      const scrollableDistance = window.innerHeight + rect.height;
      const scrolled = window.innerHeight - rect.top;
      //don't go over 100% - can happen with elastic scroll on touch devices
      const pct = Math.min((scrolled / scrollableDistance) * 100, 100);
      const invertedPct = 100 - pct;

      this.el.nativeElement.style.backgroundPositionY = `${invertedPct}%`;
    }
  }
}
