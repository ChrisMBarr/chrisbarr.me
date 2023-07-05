import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { DevDetailsComponent } from './dev/dev-details/dev-details.component';
import { DesignComponent } from './design/design.component';
import { DesignDetailsComponent } from './design/design-details/design-details.component';
// import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: '', component: AboutComponent, title: 'Chris Barr - About' },
  { path: 'dev', component: DevComponent, title: 'Chris Barr - Dev', pathMatch: 'full' },
  { path: 'dev/:id', component: DevDetailsComponent, title: 'Chris Barr - Dev - ', pathMatch: 'full' },
  { path: 'design', component: DesignComponent, title: 'Chris Barr - Design', pathMatch: 'full' },
  { path: 'design/:id', component: DesignDetailsComponent, title: 'Chris Barr - Design -', pathMatch: 'full' },
  // { path: 'photo', component: PhotoComponent, title: 'Chris Barr - Photo', pathMatch: 'full' },
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
export class AppRoutingModule {}
