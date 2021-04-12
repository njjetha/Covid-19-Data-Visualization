import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';


const routes: Routes = [ 
  {path: 'home',component: HomeComponent},
  {path:'',component:StateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
