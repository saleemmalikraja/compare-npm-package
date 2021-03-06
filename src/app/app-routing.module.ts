import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpmGraphComponent } from './feature/npm-graph/npm-graph.component';
import { DumbTableComponent } from './shared/dumb-table/dumb-table.component';

const routes: Routes = [
  {
    path: 'graphMode',
    component: NpmGraphComponent
  },
  {
    path: 'tableMode',
    loadChildren: './feature/npm-table/npm-table.module#NpmTableModule'
  },
  {
    path: 'cardMode',
    loadChildren: './feature/npm-card/npm-card.module#NpmCardModule'
  },
  {
    path: 'boardMode',
    loadChildren: './feature/npm-board/npm-board.module#NpmBoardModule'
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
        useHash: false,
        enableTracing: false
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
