import { Component, ElementRef, TemplateRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { IProject, designProjectList } from '../data/design.data';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit, AfterViewInit, OnDestroy {
  private routeSub$: Subscription = Subscription.EMPTY;
  @ViewChild('lightboxTemplate') lightboxTemplate!: TemplateRef<ElementRef<HTMLElement>>;

  projects: IProject[] = [...designProjectList];
  projectDetails?: IProject;

  constructor(public gallery: Gallery, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    this.routeSub$ = this.activatedRoute.url.subscribe((urlSegments) => {
      if (urlSegments.length > 1) {
        this.projectDetails = this.projects.find((p) => p.id === urlSegments[1].path);
        if (this.projectDetails) {
          this.titleService.setTitle(`${this.titleService.getTitle()} - ${this.projectDetails.title}`);
        }
      } else {
        this.projectDetails = undefined;
      }
    });
  }

  ngAfterViewInit(): void {
    for (const proj of this.projects) {
      for (const gallery of proj.galleries) {
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

  ngOnDestroy() {
    this.routeSub$.unsubscribe();
  }
}
