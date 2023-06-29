import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly window: Window = this.document.defaultView as Window;
  private resizeDebounce?: number;

  @ViewChild('navContainer') private navContainer!: ElementRef<HTMLElement>;
  @ViewChild('navActiveBg') private navActiveBg!: ElementRef<HTMLElement>;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.window.scrollTo({ top: 0 });

        const activeLink = this.navContainer.nativeElement.querySelector<HTMLElement>(`[href="${event.url}"]`);
        if (activeLink) {
          this.positionNavHighlight(activeLink);
        }
      }
    });
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
    const rect = link.getBoundingClientRect();
    this.navActiveBg.nativeElement.style.top = `${rect.top}px`;
    this.navActiveBg.nativeElement.style.left = `${rect.left}px`;
    this.navActiveBg.nativeElement.style.height = `${rect.height}px`;
    this.navActiveBg.nativeElement.style.width = `${rect.width}px`;
  }
}
