import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpmCardComponent } from './feature/npm-card/npm-card.component';
import { NpmGraphComponent } from './feature/npm-graph/npm-graph.component';
import { DumbTableComponent } from './shared/dumb-table/dumb-table.component';

const routes: Routes = [
  {
    path: 'graphMode',
    component: NpmGraphComponent
  },
  {
    path: 'tableMode',
    component: DumbTableComponent
  },
  {
    path: 'cardMode',
    component: NpmCardComponent
  },
  {
    path: '',
    redirectTo: 'graphMode',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'graphMode'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        onSameUrlNavigation: 'reload',
        useHash: true,
        enableTracing: false
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
