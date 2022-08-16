import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { WelcomeComponent } from './components/main/welcome/welcome.component';
import { DoctrineComponent } from './components/main/doctrine/doctrine.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsComponent } from './components/sidebar/posts/posts.component';
import { SermonsComponent } from './components/sidebar/sermons/sermons.component';
import { BulletinsComponent } from './components/main/bulletins/bulletins.component';
import { ProgramsAndEventsComponent } from './components/main/programs-and-events/programs-and-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { DefaultmainComponent } from './components/main/defaultmain/defaultmain.component';
import { AboutComponent } from './components/utils/about/about.component';
import { LocationComponent } from './components/utils/location/location.component';
import { ContactComponent } from './components/utils/contact/contact.component';
import { ImageComponent } from './components/utils/image/image.component';
import { PagesTopComponent } from './components/utils/pages-top/pages-top.component';
import { VersesCarouselComponent } from './components/main/verses-carousel/verses-carousel.component';
import { StringPipe } from './customPipes/string.pipe';
import { BeliefsComponent } from './components/main/welcome/beliefs/beliefs.component';
import { ChurchLeadershipComponent } from './components/utils/church-leadership/church-leadership.component';
import { WeeklyProgramsComponent } from './components/main/programs-and-events/weekly-programs/weekly-programs.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
    LandingComponent,
    WelcomeComponent,
    DoctrineComponent,
    SidebarComponent,
    PostsComponent,
    SermonsComponent,
    BulletinsComponent,
    ProgramsAndEventsComponent,
    FooterComponent,
    DefaultmainComponent,
    AboutComponent,
    LocationComponent,
    ContactComponent,
    ImageComponent,
    PagesTopComponent,
    VersesCarouselComponent,
    StringPipe,
    BeliefsComponent,
    ChurchLeadershipComponent,
    WeeklyProgramsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
