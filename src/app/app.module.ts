import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { DesignComponent } from './design/design.component';
import { PhotoComponent } from './photo/photo.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ContactFormComponent } from './about/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DevComponent,
    DesignComponent,
    PhotoComponent,
    SvgIconComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
