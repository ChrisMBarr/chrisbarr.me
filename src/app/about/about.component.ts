import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  private readonly window: Window = this.document.defaultView as Window;

  @ViewChild('introContainer', { static: true }) private introContainer!: ElementRef;

  private arrowTimer?: ReturnType<typeof setTimeout>;
  @ViewChild('introArrow', { static: true }) private introArrow!: ElementRef;
  private introArrowEl!: HTMLElement;

  private skillAnimationTriggered = false;
  @ViewChild('skillsIconsContainer', { static: true }) private skillsIconsContainer!: ElementRef;
  private skillsIconsEl!: HTMLElement;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.skillsIconsEl = this.skillsIconsContainer.nativeElement as HTMLElement;
    this.introArrowEl = this.introArrow.nativeElement as HTMLElement;

    //Only show the arrow animation if the intro area is smaller than it's max height
    //This means the screen is small enough to not show the next section top, so we want
    //to only show an arrow if it might not be obvious that there is more content
    const introContainerEl = this.introContainer.nativeElement as HTMLElement;
    const maxHeight = parseInt(getComputedStyle(introContainerEl).getPropertyValue('max-height'), 10);
    const actualHeight = introContainerEl.getBoundingClientRect().height;

    if (actualHeight <= maxHeight) {
      this.arrowTimer = setTimeout(() => {
        this.introArrowEl.classList.add('shown');
      }, 5000);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (this.arrowTimer) {
      clearTimeout(this.arrowTimer);
      this.arrowTimer = undefined;
      this.introArrowEl.classList.remove('shown');
    }

    if (!this.skillAnimationTriggered) {
      const iconsTop = this.skillsIconsEl.getBoundingClientRect().top;
      if (this.window.innerHeight >= iconsTop + 100) {
        this.skillAnimationTriggered = true;
        this.skillsIconsEl.classList.add('animated');
      }
    }
  }
}
