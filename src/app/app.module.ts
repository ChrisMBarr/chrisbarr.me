import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party modules
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

//App Modules/Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
// import { ContactFormComponent } from './about/contact-form/contact-form.component';
import { DevComponent } from './dev/dev.component';
import { DesignComponent } from './design/design.component';
// import { PhotoComponent } from './photo/photo.component';

//App Directives
import { ParallaxScrollDirective } from './directives/parallax-scroll.directive';
import { IsStickyDirective } from './directives/is-sticky.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DevComponent,
    DesignComponent,
    // PhotoComponent,
    ParallaxScrollDirective,
    IsStickyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
