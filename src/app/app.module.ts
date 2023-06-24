import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { DesignComponent } from './design/design.component';
import { PhotoComponent } from './photo/photo.component';
import { SkillComponent } from './about/skill/skill.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, DevComponent, DesignComponent, PhotoComponent, SkillComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
