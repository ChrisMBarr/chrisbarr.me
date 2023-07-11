import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//3rd party modules
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
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
import { ParallaxScrollDirective } from './directives/parallax-scroll.directive';
import { IsStickyDirective } from './directives/is-sticky.directive';
import { InternalRouteLinksDirective } from './directives/internal-route-links.directive';
import { GalleryThumbnailsComponent } from './gallery-thumbnails/gallery-thumbnails.component';
import { SkillGroupCardComponent } from './home/skill-group-card/skill-group-card.component';

@NgModule({
  declarations: [
    AppComponent,

    //Page Components
    HomeComponent,
    DevComponent,
    DevDetailsComponent,
    DesignComponent,
    DesignDetailsComponent,
    PhotoComponent,
    PhotoDetailsComponent,
    ContactComponent,

    //App Directives/Components
    ParallaxScrollDirective,
    IsStickyDirective,
    InternalRouteLinksDirective,
    GalleryThumbnailsComponent,
    SkillGroupCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot(isDevMode() ? '' : 'G-XBQPNRYEHJ'),
    NgxGoogleAnalyticsRouterModule,
    GalleryModule,
    LightboxModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
