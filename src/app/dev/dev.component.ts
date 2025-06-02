import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDevProject, devProjectList } from '../data/dev.data';

@Component({
  selector: 'app-dev',
  standalone: false,
  templateUrl: './dev.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevComponent {
  projects: IDevProject[] = [...devProjectList];
}
