import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { VideosComponent } from './videos/videos.component';
import { YogasComponent } from './yogas/yogas.component';
import { MeditationComponent } from './meditation/meditation.component';
import { WebinarComponent } from './webinar/webinar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [

 
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'videos', component: VideosComponent},
  { path: 'yogas', component: YogasComponent },
  { path: 'meditation', component: MeditationComponent },
  { path: 'webinar', component: WebinarComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'common', component: CommonComponent } 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
