import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { CustomImageItem } from '../data/data.model';
import { Gallery } from 'ng-gallery';

@Component({
  selector: 'app-gallery-thumbnails',
  templateUrl: './gallery-thumbnails.component.html',
  styleUrls: ['./gallery-thumbnails.component.scss'],
})
export class GalleryThumbnailsComponent implements AfterViewInit {
  @ViewChild('lightboxTemplate') lightboxTemplate!: TemplateRef<ElementRef<HTMLElement>>;

  @Input() galleryId = '';
  @Input() imageList: CustomImageItem[] = [];
  @Input() dense = false;

  constructor(private gallery: Gallery) {}

  ngAfterViewInit(): void {
    const lightboxRef = this.gallery.ref(this.galleryId);

    lightboxRef.setConfig({
      counter: false,
      thumbAutosize: true,
      thumb: this.imageList.length > 1,
      itemTemplate: this.lightboxTemplate,
    });

    lightboxRef.load(this.imageList);
  }
}
