import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DevComponent } from './dev/dev.component';
import { DevDetailsComponent } from './dev/dev-details/dev-details.component';
import { DesignComponent } from './design/design.component';
import { DesignDetailsComponent } from './design/design-details/design-details.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailsComponent } from './photo/photo-details/photo-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Chris Barr'},
  { path: 'dev', component: DevComponent, title: 'Chris Barr - Dev', pathMatch: 'full' },
  { path: 'dev/:id', component: DevDetailsComponent, title: 'Chris Barr - Dev - ', pathMatch: 'full' },
  { path: 'design', component: DesignComponent, title: 'Chris Barr - Design', pathMatch: 'full' },
  { path: 'design/:id', component: DesignDetailsComponent, title: 'Chris Barr - Design -', pathMatch: 'full' },
  { path: 'photo', component: PhotoComponent, title: 'Chris Barr - Photo', pathMatch: 'full' },
  { path: 'photo/:id', component: PhotoDetailsComponent, title: 'Chris Barr - Photo -', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, title: 'Chris Barr - Contact Me', pathMatch: 'full' },
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
