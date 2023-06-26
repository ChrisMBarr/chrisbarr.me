import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  skillAnimationTriggered = false;
  @ViewChild('skillsIconsContainer', { static: true }) skillsIconsContainer!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.skillAnimationTriggered) {
      const iconsEl = this.skillsIconsContainer.nativeElement as HTMLElement;
      const iconsTop = iconsEl.getBoundingClientRect().top;
      if (window.innerHeight >= iconsTop + 100) {
        this.skillAnimationTriggered = true;
        iconsEl.classList.add('animated');
      }
    }
  }
}
