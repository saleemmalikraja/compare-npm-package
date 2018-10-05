import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpmTableComponent } from './feature/npm-table/npm-table.component';
import { NpmCardComponent } from './feature/npm-card/npm-card.component';
import { NpmGraphComponent } from './feature/npm-graph/npm-graph.component';

const routes: Routes = [
  {
    path: 'graphMode',
    component: NpmGraphComponent
  },
  {
    path: 'tableMode',
    component: NpmTableComponent
    // loadChildren: 'app/feature/dcn-table/dcn-table.module#DcnTableModule' // for lazy loading the modules
  },
  {
    path: 'cardMode',
    component: NpmCardComponent
    // loadChildren: 'app/feature/makecode/makecode.module#MakecodeModule' // for lazy loading the modules
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
            useHash: true,
            enableTracing: false
        })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
