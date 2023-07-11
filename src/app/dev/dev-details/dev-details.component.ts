import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { devProjectList } from 'src/app/data/dev.data';
import { IDevProject } from 'src/app/data/dev.data';

@Component({
  selector: 'app-dev-details',
  templateUrl: './dev-details.component.html',
  styleUrls: ['./dev-details.component.scss'],
})
export class DevDetailsComponent implements OnInit {
  projectDetails?: IDevProject;

  constructor(private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.projectDetails = devProjectList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.projectDetails) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.projectDetails.title);
      }
    }
  }
}
