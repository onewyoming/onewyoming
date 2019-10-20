import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
