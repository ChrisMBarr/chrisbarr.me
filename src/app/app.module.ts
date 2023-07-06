import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party modules
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

//App Modules/Page Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
// import { ContactFormComponent } from './about/contact-form/contact-form.component';
import { DevComponent } from './dev/dev.component';
import { DevDetailsComponent } from './dev/dev-details/dev-details.component';
import { DesignComponent } from './design/design.component';
import { DesignDetailsComponent } from './design/design-details/design-details.component';
// import { PhotoComponent } from './photo/photo.component';

//App Directives/Components
import { ParallaxScrollDirective } from './directives/parallax-scroll.directive';
import { IsStickyDirective } from './directives/is-sticky.directive';
import { GalleryThumbnailsComponent } from './gallery-thumbnails/gallery-thumbnails.component';
import { SkillGroupCardComponent } from './about/skill-group-card/skill-group-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DevComponent,
    DevDetailsComponent,
    DesignComponent,
    DesignDetailsComponent,
    // PhotoComponent,
    ParallaxScrollDirective,
    IsStickyDirective,
    GalleryThumbnailsComponent,
    SkillGroupCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
