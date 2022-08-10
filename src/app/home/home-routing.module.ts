import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultmainComponent } from './components/main/defaultmain/defaultmain.component';
import { ProgramsAndEventsComponent } from './components/main/programs-and-events/programs-and-events.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/sidebar/posts/posts.component';
import { SermonsComponent } from './components/sidebar/sermons/sermons.component';
import { AboutComponent } from './components/utils/about/about.component';
import { ContactComponent } from './components/utils/contact/contact.component';
import { LocationComponent } from './components/utils/location/location.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent,
    children: [
      { path: '', component: DefaultmainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'location', component: LocationComponent },
      { path: 'programs', component: ProgramsAndEventsComponent },
      { path: 'sermons', component: SermonsComponent },
      { path: 'posts', component: PostsComponent }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
