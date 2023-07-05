import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IDesignProject, designProjectList } from 'src/app/data/design.data';

@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  styleUrls: ['./design-details.component.scss'],
})
export class DesignDetailsComponent implements OnInit {
  @ViewChild('detailsDescription') detailsDescription?: ElementRef<HTMLElement>;

  projectDetails?: IDesignProject;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url.length > 1) {
      this.projectDetails = designProjectList.find((p) => p.urlSlug === this.activatedRoute.snapshot.url[1].path);
      if (this.projectDetails) {
        this.titleService.setTitle(this.titleService.getTitle() + ' ' + this.projectDetails.title);

        //Look for any internal links that we need to force to happen inside the router
        setTimeout(()=>{
        if (this.detailsDescription) {
          this.detailsDescription.nativeElement.querySelectorAll<HTMLAnchorElement>('a[rel="ng"]').forEach((link) => {
            link.addEventListener('click', (evt) => {
              evt.preventDefault();
              void this.router.navigate([link.attributes.getNamedItem('href')?.value]);
            });
          });
        }
      })
      }
    }
  }
}
