import { Component } from '@angular/core';
import { IDesignProject, designProjectList } from '../data/design.data';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
})
export class DesignComponent {
  projects: IDesignProject[] = [...designProjectList];
}
