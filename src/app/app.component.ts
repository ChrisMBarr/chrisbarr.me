import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        query(':enter', [style({ opacity: '0' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('250ms', style({ opacity: '0' }))], { optional: true }),
          query(':enter', [animate('250ms', style({ opacity: '1' }))], { optional: true }),
        ]),
        query(':enter', animateChild(), { optional: true }),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public enableAnimation = false;
  private readonly window: Window = this.document.defaultView as Window;
  private resizeDebounce?: number;

  @ViewChild('navContainer') private navContainer!: ElementRef<HTMLElement>;
  @ViewChild('navActiveBg') private navActiveBg!: ElementRef<HTMLElement>;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (typeof this.window.scrollTo === 'function') {
          this.window.scrollTo({ top: 0 });
        }

        const activeLink = this.navContainer.nativeElement.querySelector<HTMLElement>(`[href="${event.url}"]`);
        if (activeLink) {
          this.positionNavHighlight(activeLink);
        }

        if (!this.enableAnimation) {
          setTimeout(() => (this.enableAnimation = true), 10); //settimeout to not trigger animation right at the end of this cycle
        }
      }
    });

    //trigger manually after initial load
    //Firefox needs this so the first positioning is re-calculated after a short delay
    this.onWindowScroll()
  }

  @HostListener('window:resize', ['$event'])
  onWindowScroll(): void {
    this.window.clearTimeout(this.resizeDebounce);
    this.resizeDebounce = this.window.setTimeout(() => {
      const activeLink = this.navContainer.nativeElement.querySelector<HTMLElement>(`.active`);
      if (activeLink) {
        this.positionNavHighlight(activeLink);
      }
    }, 200);
  }

  private positionNavHighlight(link: HTMLElement) {
    //prevent errors on SSR build
    if (typeof link.getBoundingClientRect === 'function') {
      const rect = link.getBoundingClientRect();
      this.navActiveBg.nativeElement.style.top = `${rect.top}px`;
      this.navActiveBg.nativeElement.style.left = `${rect.left}px`;
      this.navActiveBg.nativeElement.style.height = `${rect.height}px`;
      this.navActiveBg.nativeElement.style.width = `${rect.width}px`;
    }
  }
}
