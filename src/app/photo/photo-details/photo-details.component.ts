import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IPhotoCategory, photosList } from 'src/app/data/photo.data';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent {
  @ViewChild('detailsDescription') detailsDescription?: ElementRef<HTMLElement>;
  photoCategory?: IPhotoCategory;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.photoCategory = photosList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.photoCategory) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.photoCategory.title);

        // Look for any internal links that we need to force to happen inside the router
        setTimeout(() => {
          if (this.detailsDescription) {
            this.detailsDescription.nativeElement.querySelectorAll<HTMLAnchorElement>('a[rel="ng"]').forEach((link) => {
              link.addEventListener('click', (evt) => {
                evt.preventDefault();
                void this.router.navigate([link.attributes.getNamedItem('href')?.value]);
              });
            });
          }
        });
      }
    }
  }
}
