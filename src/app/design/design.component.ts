import { Component, ElementRef, TemplateRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { IProject, designProjectList } from '../data/design.data';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements AfterViewInit {
  @ViewChild('lightboxTemplate') lightboxTemplate!: TemplateRef<ElementRef<HTMLElement>>;

  projects: IProject[] = [...designProjectList];

  constructor(public gallery: Gallery) {}

  ngAfterViewInit() {
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
}
