import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallaxScroll]',
})
export class ParallaxScrollDirective {
  private readonly scale = 0.1;
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(ev: Event): void {
    const win = ev.currentTarget as Window;
    const rect = this.el.nativeElement.getBoundingClientRect();

    if (rect.top < win.innerHeight) {
      const total = ( win.scrollY) / (rect.bottom + rect.height);
      const pct = total * 100;

      // console.log(win.scrollY, rect.top, rect.bottom, `pct: ${Math.round(pct)}%`);

      this.el.nativeElement.style.backgroundPositionY = `${win.scrollY * this.scale}px`;
    }
  }
}
