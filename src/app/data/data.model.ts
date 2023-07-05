import { ImageItem, ImageItemData } from "ng-gallery";

export interface IProjectBase {
  title: string;
  urlSlug: string;
  beginDescription: string;
  endDescription: string;
}

interface ICustomImageItemData extends ImageItemData {
  thumbTitle: string;
}

export class CustomImageItem extends ImageItem {
  override readonly data: ImageItemData;
  constructor(data: ICustomImageItemData) {
    super(data);
    this.data = data;
  }
}

export interface IGallery {
  title?: string;
  id: string;
  images: CustomImageItem[];
}
