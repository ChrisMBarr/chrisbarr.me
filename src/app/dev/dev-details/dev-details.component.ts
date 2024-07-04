import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { devProjectList } from 'src/app/data/dev.data';
import { IDevProject } from 'src/app/data/dev.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dev-details',
  templateUrl: './dev-details.component.html',
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
