import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ISkillGroup, skillGroups } from '../data/skills.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  private readonly window: Window = this.document.defaultView as Window;
  @ViewChild('introContainer', { static: true }) private introContainer!: ElementRef<HTMLElement>;
  @ViewChild('skillsContainer', { static: true }) private skillsContainer!: ElementRef<HTMLElement>;
  @ViewChildren('skillsIconsCard') private skillsIconsCard!: QueryList<ElementRef<HTMLElement>>;

  private arrowTimer?: ReturnType<typeof setTimeout>;
  private skillAnimationTriggered = false;

  skillGroups: ISkillGroup[] = skillGroups;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngAfterViewInit(): void {
    //prevent a build error for SSR
    if (typeof getComputedStyle === 'function') {
      //Only show the arrow animation if the intro area is smaller than it's max height
      //This means the screen is small enough to not show the next section top, so we want
      //to only show an arrow if it might not be obvious that there is more content
      const maxHeight = parseInt(getComputedStyle(this.introContainer.nativeElement).getPropertyValue('max-height'), 10);
      const actualHeight = this.introContainer.nativeElement.getBoundingClientRect().height;

      this.onWindowScroll(); //manually trigger initially
      if (actualHeight <= maxHeight) {
        this.arrowTimer = setTimeout(() => {
          this.introContainer.nativeElement.classList.add('show-arrow');
        }, 2500);
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (this.arrowTimer) {
      clearTimeout(this.arrowTimer);
      this.arrowTimer = undefined;
      this.introContainer.nativeElement.classList.remove('show-arrow');
    }

    if (!this.skillAnimationTriggered) {
      const iconsTop = this.skillsIconsCard.first.nativeElement.getBoundingClientRect().top;
      if (this.window.innerHeight >= iconsTop + 100) {
        this.skillAnimationTriggered = true;
        this.skillsContainer.nativeElement.classList.add('skills-icons-animate');
      }
    }
  }
}
