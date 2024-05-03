import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { VideosComponent } from './videos/videos.component';
import { YogasComponent } from './yogas/yogas.component';
import { MeditationComponent } from './meditation/meditation.component';
import { WebinarComponent } from './webinar/webinar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BlogsComponent,
    VideosComponent,
    YogasComponent,
    MeditationComponent,
    WebinarComponent,
    ContactUsComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
