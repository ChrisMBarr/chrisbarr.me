import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appIsSticky]',
})
export class IsStickyDirective {
  private readonly el = inject(ElementRef) as ElementRef<HTMLElement>;

  private readonly stuckClass = 'is-stuck';

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
