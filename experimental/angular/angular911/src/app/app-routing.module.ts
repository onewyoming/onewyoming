import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Experiment1Component } from './experiment/experiment1/experiment1.component';


const routes: Routes = [
  { path: '', component: Experiment1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
