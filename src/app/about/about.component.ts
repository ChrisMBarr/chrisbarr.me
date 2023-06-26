import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  private readonly window: Window = this.document.defaultView as Window;

  skillAnimationTriggered = false;
  @ViewChild('skillsIconsContainer', { static: true }) skillsIconsContainer!: ElementRef;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.skillAnimationTriggered) {
      const iconsEl = this.skillsIconsContainer.nativeElement as HTMLElement;
      const iconsTop = iconsEl.getBoundingClientRect().top;
      if (this.window.innerHeight >= iconsTop + 100) {
        this.skillAnimationTriggered = true;
        iconsEl.classList.add('animated');
      }
    }
  }
}
