import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  public isHomePage = false;
  private readonly window: Window = this.document.defaultView as Window;
  private winWidth = this.window.innerWidth;
  private resizeDebounce?: number;

  @ViewChild('header') private header!: ElementRef<HTMLElement>;
  @ViewChild('navContainer') private navContainer!: ElementRef<HTMLElement>;
  @ViewChild('navActiveBg') private navActiveBg!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (typeof this.window.scrollTo === 'function') {
          this.window.scrollTo({ top: 0 });
        }

        this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects.startsWith('/?');

        //small delay needed on route changes
        setTimeout(() => {
          this.positionNavHighlight();
        });
      }
    });

    //trigger manually after initial load
    //Some browsers need this so the first positioning (due to routing) is re-calculated after a short delay
    //This is due to things like fonts being loaded that might cause element sizes to be different
    this.onWindowResize(true);

    //do it again on the first load, sometimes the very first load is weird and hard to reproduce
    setTimeout(() => {
      this.onWindowResize(true);
    }, 500);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(force = false): void {
    //iOS triggers resize events on scroll, this checks if it has actually changed or not
    if (this.window.innerWidth !== this.winWidth || force) {
      this.window.clearTimeout(this.resizeDebounce);
      this.resizeDebounce = this.window.setTimeout(() => {
        this.winWidth = this.window.innerWidth;
        this.positionNavHighlight();
      }, 200);
    }
  }

  private positionNavHighlight() {
    const activeLink = this.navContainer.nativeElement.querySelector<HTMLElement>(`.active`);
    if (activeLink) {
      //prevent errors on SSR build
      if (typeof activeLink.getBoundingClientRect === 'function') {
        const rect = activeLink.getBoundingClientRect();

        //Correctly position for mobile devices
        const headerIsRelative = this.window.getComputedStyle(this.header.nativeElement).position === 'relative';
        const offsetTop = headerIsRelative ? this.document.documentElement.scrollTop : 0;
        const offsetLeft = headerIsRelative ? this.document.documentElement.scrollLeft : 0;

        this.navActiveBg.nativeElement.style.top = `${(rect.top + offsetTop).toString()}px`;
        this.navActiveBg.nativeElement.style.left = `${(rect.left + offsetLeft).toString()}px`;
        this.navActiveBg.nativeElement.style.height = `${rect.height.toString()}px`;
        this.navActiveBg.nativeElement.style.width = `${rect.width.toString()}px`;
      }
    }
  }
}
