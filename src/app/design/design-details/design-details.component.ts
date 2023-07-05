import { Component, AfterViewInit, OnInit, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from 'ng-gallery';
import { IDesignProject, designProjectList } from 'src/app/data/design.data';

@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  styleUrls: ['./design-details.component.scss'],
})
export class DesignDetailsComponent implements AfterViewInit, OnInit {
  @ViewChild('lightboxTemplate') lightboxTemplate!: TemplateRef<ElementRef<HTMLElement>>;
  @ViewChild('detailsDescription') detailsDescription?: ElementRef<HTMLElement>;

  projectDetails?: IDesignProject;

  constructor(
    public gallery: Gallery,
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
        if (this.detailsDescription) {
          this.detailsDescription.nativeElement.querySelectorAll<HTMLAnchorElement>('a[rel="ng"]').forEach((link) => {
            link.addEventListener('click', (evt) => {
              evt.preventDefault();
              void this.router.navigate([link.attributes.getNamedItem('href')?.value]);
            });
          });
        }
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.projectDetails) {
      for (const gallery of this.projectDetails.galleries) {
        const lightboxRef = this.gallery.ref(gallery.id);

        lightboxRef.setConfig({
          counter: false,
          thumbAutosize: true,
          itemTemplate: this.lightboxTemplate,
        });

        lightboxRef.load(gallery.images);
      }
    }
  }
}
