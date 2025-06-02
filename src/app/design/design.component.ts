import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDesignProject, designProjectList } from '../data/design.data';

@Component({
  selector: 'app-design',
  standalone: false,
  templateUrl: './design.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignComponent {
  projects: IDesignProject[] = [...designProjectList];
}
