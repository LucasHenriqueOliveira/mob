import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadunicoComponent } from './components/cadunico/cadunico.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'cadunico',
  component: CadunicoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
