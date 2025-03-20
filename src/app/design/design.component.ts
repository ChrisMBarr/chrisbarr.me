import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDesignProject, designProjectList } from '../data/design.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-design',
  templateUrl: './design.component.html',
  standalone: false,
})
export class DesignComponent {
  projects: IDesignProject[] = [...designProjectList];
}
