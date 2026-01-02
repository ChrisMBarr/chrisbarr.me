import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appIsSticky]',
  standalone: false,
  host: {
    '(window:scroll)': 'determineIfStuck()',
    '(window:resize)': 'determineIfStuck()',
  },
})
export class IsStickyDirective {
  private readonly el = inject(ElementRef) as ElementRef<HTMLElement>;

  private readonly stuckClass = 'is-stuck';

  public determineIfStuck(): void {
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
