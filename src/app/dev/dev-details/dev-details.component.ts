import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { devProjectList } from '../../data/dev.data';
import { IDevProject } from '../../data/dev.data';
import { GalleryThumbnailsComponent } from '../../gallery-thumbnails/gallery-thumbnails.component';
import { InternalRouteLinksDirective } from '../../directives/internal-route-links.directive';
import { IsStickyDirective } from '../../directives/is-sticky.directive';

@Component({
  selector: 'app-dev-details',
  templateUrl: './dev-details.component.html',
  standalone: true,
  imports: [RouterLink, IsStickyDirective, InternalRouteLinksDirective, GalleryThumbnailsComponent],
})
export class DevDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  projectDetails?: IDevProject;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.projectDetails = devProjectList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.projectDetails) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.projectDetails.title);
      }
    }
  }
}
