import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Input, ViewChild } from '@angular/core';
import { ISkillGroup } from 'src/app/data/skills.data';

@Component({
  selector: 'app-skill-group-card',
  templateUrl: './skill-group-card.component.html',
  styleUrls: ['./skill-group-card.component.scss'],
})
export class SkillGroupCardComponent {
  private readonly window: Window = this.document.defaultView as Window;
  private skillAnimationTriggered = false;
  @ViewChild('card') card!: ElementRef<HTMLElement>;
  @Input() group!: ISkillGroup;
  @Input() viewAsList = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.skillAnimationTriggered) {
      const iconsTop = this.el.nativeElement.getBoundingClientRect().top;
      if (this.window.innerHeight >= iconsTop + 100) {
        this.skillAnimationTriggered = true;
        this.card.nativeElement.classList.add('skills-icons-animate');
      }
    }
  }
}
