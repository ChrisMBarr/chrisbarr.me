import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IPhotoCategory, photosList } from '../data/photo.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  photoCategories: IPhotoCategory[] = [...photosList];
}
