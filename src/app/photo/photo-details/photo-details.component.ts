import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { IPhotoCategory, photosList } from '../../data/photo.data';
import { GalleryThumbnailsComponent } from '../../gallery-thumbnails/gallery-thumbnails.component';
import { InternalRouteLinksDirective } from '../../directives/internal-route-links.directive';
import { IsStickyDirective } from '../../directives/is-sticky.directive';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
  standalone: true,
  imports: [RouterLink, IsStickyDirective, InternalRouteLinksDirective, GalleryThumbnailsComponent],
})
export class PhotoDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  photoCategory?: IPhotoCategory;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.photoCategory = photosList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.photoCategory) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.photoCategory.title);
      }
    }
  }
}
