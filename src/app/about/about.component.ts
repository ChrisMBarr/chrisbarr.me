import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ISkillGroup, skillGroups } from '../data/skills.data';
import { designProjectList } from '../data/design.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('introContainer', { static: true }) private introContainer!: ElementRef<HTMLElement>;

  private arrowTimer?: ReturnType<typeof setTimeout>;
  readonly designProjects = designProjectList;
  readonly skillGroups: ISkillGroup[] = skillGroups;

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
  }
}
