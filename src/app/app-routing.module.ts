import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './home/components/not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }
  ,
  {
    path: 'home', redirectTo: '', pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
