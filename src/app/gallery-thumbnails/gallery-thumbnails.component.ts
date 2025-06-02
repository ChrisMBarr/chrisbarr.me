import { AfterViewInit, Component, Input, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import * as dataModel from '../data/data.model';
import * as ngGallery from 'ng-gallery';

@Component({
  selector: 'app-gallery-thumbnails',
  standalone: false,
  templateUrl: './gallery-thumbnails.component.html',
  styleUrl: './gallery-thumbnails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryThumbnailsComponent implements AfterViewInit {
  private readonly gallery = inject(ngGallery.Gallery);

  @ViewChild(ngGallery.GalleryImageDef, { static: true }) imageDef!: ngGallery.GalleryImageDef;

  @Input() galleryId = '';
  @Input() itemList: Array<dataModel.CustomImageItem | ngGallery.YoutubeItem | ngGallery.VimeoItem> = [];
  @Input() dense = false;

  ngAfterViewInit(): void {
    this.gallery
      .ref(this.galleryId, {
        counter: false,
        thumbAutosize: true,
        thumbs: false,
        imageTemplate: this.imageDef.templateRef,
      })
      .load(this.itemList);
  }
}
