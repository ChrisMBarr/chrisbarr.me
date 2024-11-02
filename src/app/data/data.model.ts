import * as ngGallery from 'ng-gallery';

export interface IProjectBase {
  title: string;
  urlSlug: string;
  beginDescription: string;
  endDescription: string;
}

interface ICustomImageItemData extends ngGallery.ImageItemData {
  thumbTitle?: string;
}

export class CustomImageItem extends ngGallery.ImageItem {
  constructor(public override readonly data: ICustomImageItemData) {
    super(data);
  }
}

export interface IImageGallery {
  title?: string;
  id: string;
  images: ngGallery.ImageItem[];
}

export interface IVideoGallery {
  title: string;
  id: string;
  videos: (ngGallery.YoutubeItem | ngGallery.VimeoItem)[];
}
