import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ISkillGroup, skillGroups } from '../data/skills.data';
import { designProjectList } from '../data/design.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('introContainer', { static: true }) private introContainer!: ElementRef<HTMLElement>;

  private arrowTimer?: ReturnType<typeof setTimeout>;
  readonly designProjects = designProjectList;
  readonly skillGroups: ISkillGroup[] = skillGroups;
  skillsAsList = false;

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

  toggleSkillsView(): void {
    this.skillsAsList = !this.skillsAsList;
  }
}
