import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componets/pages/about/about.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { NewMomentsComponent } from './componets/pages/new-moments/new-moments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'moments/new', component: NewMomentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
