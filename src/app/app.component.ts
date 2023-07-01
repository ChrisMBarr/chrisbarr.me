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
  private winWidth = this.window.innerWidth;
  private resizeDebounce?: number;

  @ViewChild('header') private header!: ElementRef<HTMLElement>;
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
    //Some browsers need this so the first positioning (due to routing) is re-calculated after a short delay
    //This is due to things like fonts being loaded that might cause element sizes to be different
    this.onWindowResize(true);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(force = false): void {
    //iOS triggers resize events on scroll, this checks if it has actually changed or not
    if (this.window.innerWidth !== this.winWidth || force) {
      this.window.clearTimeout(this.resizeDebounce);
      this.resizeDebounce = this.window.setTimeout(() => {
        this.winWidth = this.window.innerWidth;
        const activeLink = this.navContainer.nativeElement.querySelector<HTMLElement>(`.active`);
        if (activeLink) {
          this.positionNavHighlight(activeLink);
        }
      }, 200);
    }
  }

  private positionNavHighlight(link: HTMLElement) {
    //prevent errors on SSR build
    if (typeof link.getBoundingClientRect === 'function') {
      const rect = link.getBoundingClientRect();

      //Correctly position for mobile devices
      const headerIsRelative = this.window.getComputedStyle(this.header.nativeElement).position === 'relative'
      const offsetTop = headerIsRelative ? document.documentElement.scrollTop : 0;
      const offsetLeft = headerIsRelative ? document.documentElement.scrollLeft : 0;

      this.navActiveBg.nativeElement.style.top = `${rect.top + offsetTop}px`;
      this.navActiveBg.nativeElement.style.left = `${rect.left + offsetLeft}px`;
      this.navActiveBg.nativeElement.style.height = `${rect.height}px`;
      this.navActiveBg.nativeElement.style.width = `${rect.width}px`;
    }
  }
}
