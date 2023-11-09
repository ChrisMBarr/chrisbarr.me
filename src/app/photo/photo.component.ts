import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IPhotoCategory, photosList } from '../data/photo.data';
import { IsStickyDirective } from '../directives/is-sticky.directive';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  standalone: true,
  imports: [IsStickyDirective, RouterLink],
})
export class PhotoComponent {
  photoCategories: IPhotoCategory[] = [...photosList];
}
