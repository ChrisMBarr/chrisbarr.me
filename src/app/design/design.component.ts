import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IDesignProject, designProjectList } from '../data/design.data';
import { IsStickyDirective } from '../directives/is-sticky.directive';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  standalone: true,
  imports: [RouterLink, IsStickyDirective],
})
export class DesignComponent {
  projects: IDesignProject[] = [...designProjectList];
}
