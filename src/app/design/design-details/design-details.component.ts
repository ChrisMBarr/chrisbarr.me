import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { IDesignProject, designProjectList } from '../../data/design.data';
import { GalleryThumbnailsComponent } from '../../gallery-thumbnails/gallery-thumbnails.component';
import { InternalRouteLinksDirective } from '../../directives/internal-route-links.directive';
import { IsStickyDirective } from '../../directives/is-sticky.directive';

@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  standalone: true,
  imports: [RouterLink, IsStickyDirective, InternalRouteLinksDirective, GalleryThumbnailsComponent],
})
export class DesignDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  projectDetails?: IDesignProject;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.projectDetails = designProjectList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.projectDetails) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.projectDetails.title);
      }
    }
  }
}
