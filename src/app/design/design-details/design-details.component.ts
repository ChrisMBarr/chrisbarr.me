import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IDesignProject, designProjectList } from 'src/app/data/design.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
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
