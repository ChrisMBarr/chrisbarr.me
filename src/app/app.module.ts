import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party modules
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

//App Modules/Page Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DevComponent } from './dev/dev.component';
import { DevDetailsComponent } from './dev/dev-details/dev-details.component';
import { DesignComponent } from './design/design.component';
import { DesignDetailsComponent } from './design/design-details/design-details.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailsComponent } from './photo/photo-details/photo-details.component';
import { ContactComponent } from './contact/contact.component';

//App Directives/Components
import { IsStickyDirective } from './directives/is-sticky.directive';
import { InternalRouteLinksDirective } from './directives/internal-route-links.directive';
import { GalleryThumbnailsComponent } from './gallery-thumbnails/gallery-thumbnails.component';
import { SkillGroupCardComponent } from './home/skill-group-card/skill-group-card.component';

@NgModule({
  declarations: [
    AppComponent,
    //Page Components
    ContactComponent,
    DesignComponent,
    DesignDetailsComponent,
    DevComponent,
    DevDetailsComponent,
    GalleryThumbnailsComponent,
    HomeComponent,
    InternalRouteLinksDirective,
    //App Directives/Components
    IsStickyDirective,
    PhotoComponent,
    PhotoDetailsComponent,
    SkillGroupCardComponent,
  ],
  imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, GalleryModule, LightboxModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
