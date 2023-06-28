import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIsSticky]',
})
export class IsStickyDirective {
  private readonly stuckClass = 'is-stuck';
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isStuck();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.isStuck();
  }

  private isStuck() {
    const computedStyles = getComputedStyle(this.el.nativeElement);
    const computedTopPos = parseInt(computedStyles.top, 10);
    const topPos = this.el.nativeElement.getBoundingClientRect().top;

    if (computedStyles.position === 'sticky' && computedTopPos === topPos) {
      this.el.nativeElement.classList.add(this.stuckClass);
    } else {
      this.el.nativeElement.classList.remove(this.stuckClass);
    }
  }
}
