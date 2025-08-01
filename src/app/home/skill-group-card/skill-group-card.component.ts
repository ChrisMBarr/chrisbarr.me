import { Component, ElementRef, HostListener, Input, ViewChild, inject, ChangeDetectionStrategy, DOCUMENT } from '@angular/core';
import { ISkillGroup } from 'src/app/data/skills.data';

@Component({
  selector: 'app-skill-group-card',
  standalone: false,
  templateUrl: './skill-group-card.component.html',
  styleUrl: './skill-group-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillGroupCardComponent {
  private readonly document = inject(DOCUMENT);
  private readonly el = inject(ElementRef) as ElementRef<HTMLElement>;

  private readonly window: Window = this.document.defaultView as Window;
  private skillAnimationTriggered = false;
  @ViewChild('card') card!: ElementRef<HTMLElement>;
  @Input() group!: ISkillGroup;
  @Input() viewAsList = false;

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
