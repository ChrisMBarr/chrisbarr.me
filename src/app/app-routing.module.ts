import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { DesignComponent } from './design/design.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: '', component: AboutComponent, },
  { path: 'dev', component: DevComponent, pathMatch: 'full' },
  { path: 'design', component: DesignComponent, pathMatch: 'full' },
  { path: 'photo', component: PhotoComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppRoutingModule {}
