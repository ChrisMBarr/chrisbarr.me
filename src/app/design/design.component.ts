import { Component } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { IDesignProject, designProjectList } from '../data/design.data';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent {
  projects: IDesignProject[] = [...designProjectList];

  constructor(public gallery: Gallery) {}
}
