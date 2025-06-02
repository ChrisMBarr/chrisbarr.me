import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IPhotoCategory, photosList } from '../data/photo.data';

@Component({
  selector: 'app-photo',
  standalone: false,
  templateUrl: './photo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  photoCategories: IPhotoCategory[] = [...photosList];
}
