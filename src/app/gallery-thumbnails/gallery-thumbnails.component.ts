import { AfterViewInit, Component, Input, ViewChild, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Gallery, GalleryImageDef } from 'ng-gallery';
import { LightboxDirective } from 'ng-gallery/lightbox';

import { CustomImageItem, CustomYoutubeItem } from '../data/data.model';

@Component({
  selector: 'app-gallery-thumbnails',
  templateUrl: './gallery-thumbnails.component.html',
  styleUrls: ['./gallery-thumbnails.component.scss'],
  standalone: true,
  imports: [GalleryImageDef, LightboxDirective, NgStyle],
})
export class GalleryThumbnailsComponent implements AfterViewInit {
  private readonly gallery = inject(Gallery);

  @ViewChild(GalleryImageDef, { static: true }) imageDef!: GalleryImageDef;

  @Input() galleryId = '';
  @Input() itemList: CustomImageItem[] | CustomYoutubeItem[] = [];
  @Input() dense = false;

  ngAfterViewInit(): void {
    this.gallery
      .ref(this.galleryId, {
        counter: false,
        thumbAutosize: true,
        thumb: false,
        imageTemplate: this.imageDef.templateRef,
      })
      .load(this.itemList);
  }
}
