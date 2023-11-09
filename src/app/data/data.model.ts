import { IframeItem, IframeItemData, ImageItem, ImageItemData, YoutubeItem, YoutubeItemData } from 'ng-gallery';

export interface IProjectBase {
  title: string;
  urlSlug: string;
  beginDescription: string;
  endDescription: string;
}
//--------------------------------------------------------
//Custom Image Gallery Item (adding a thumbnail title)
//--------------------------------------------------------
interface ICustomImageItemData extends ImageItemData {
  thumbTitle?: string;
}

export class CustomImageItem extends ImageItem {
  override readonly data: ICustomImageItemData;
  constructor(data: ICustomImageItemData) {
    super(data);
    this.data = data;
  }
}

export interface IImageGallery {
  title?: string;
  id: string;
  images: CustomImageItem[];
}

//--------------------------------------------------------
//Custom YouTube Gallery item (adding a thumbnail title)
//--------------------------------------------------------
interface ICustomYoutubeItemData extends YoutubeItemData {
  thumbTitle?: string;
  alt?: string;
}

export class CustomYoutubeItem extends YoutubeItem {
  override readonly data: ICustomYoutubeItemData;
  constructor(data: ICustomYoutubeItemData) {
    super(data);
    const src = data.src as string;
    this.data = {
      ...data,
      ...{
        alt:'',
        src: `https://youtube.com/embed/${src}`,
        thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${src}/default.jpg`,
      },
    };
  }
}

interface ICustomIframeItemData extends IframeItemData {
  thumbTitle?: string;
}

export class CustomIFrameItem extends IframeItem {
  override readonly data: ImageItemData;
  constructor(data: ICustomIframeItemData) {
    super(data);
    this.data = data;
  }
}

export interface IVideoGallery {
  title: string;
  id: string;
  videos: (CustomYoutubeItem | CustomIFrameItem)[];
}
