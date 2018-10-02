import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpmComponent } from './npm/npm.component';

const routes: Routes = [
  {
    path: "",
    component: NpmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
