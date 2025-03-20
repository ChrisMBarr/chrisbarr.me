import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDevProject, devProjectList } from '../data/dev.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  standalone: false,
})
export class DevComponent {
  projects: IDevProject[] = [...devProjectList];
}
