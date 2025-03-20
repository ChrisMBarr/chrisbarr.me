import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appInternalRouteLinks]',
  standalone: false,
})
export class InternalRouteLinksDirective implements AfterViewInit {
  private readonly el = inject(ElementRef) as ElementRef<HTMLElement>;
  private readonly router = inject(Router);

  ngAfterViewInit(): void {
    //Look for any internal links that we need to force to happen inside the router
    this.el.nativeElement.querySelectorAll<HTMLAnchorElement>('a[rel="ng"]').forEach((link) => {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        void this.router.navigate([link.attributes.getNamedItem('href')?.value]);
      });
    });
  }
}
