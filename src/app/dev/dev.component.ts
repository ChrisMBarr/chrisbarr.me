import { Component } from '@angular/core';
import { IDevProject, devProjectList } from '../data/dev.data';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent {

  projects: IDevProject[] = [...devProjectList];
}
