import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IDevProject, devProjectList } from '../data/dev.data';
import { IsStickyDirective } from '../directives/is-sticky.directive';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  standalone: true,
  imports: [IsStickyDirective, RouterLink],
})
export class DevComponent {
  projects: IDevProject[] = [...devProjectList];
}
