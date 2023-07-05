import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { devProjectList } from 'src/app/data/dev.data';
import { IDevProject } from 'src/app/data/dev.data';

@Component({
  selector: 'app-dev-details',
  templateUrl: './dev-details.component.html',
  styleUrls: ['./dev-details.component.scss'],
})
export class DevDetailsComponent implements OnInit {
  @ViewChild('detailsDescription') detailsDescription?: ElementRef<HTMLElement>;

  projectDetails?: IDevProject;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.projectDetails = devProjectList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.projectDetails) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.projectDetails.title);

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
