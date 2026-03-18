import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpmGraphComponent } from './feature/npm-graph/npm-graph.component';

const routes: Routes = [
  {
    path: 'graphMode',
    component: NpmGraphComponent
  },
  {
    path: 'tableMode',
    loadChildren: () => import('./feature/npm-table/npm-table.module').then(m => m.NpmTableModule)
  },
  {
    path: 'cardMode',
    loadChildren: () => import('./feature/npm-card/npm-card.module').then(m => m.NpmCardModule)
  },
  {
    path: 'boardMode',
    loadChildren: () => import('./feature/npm-board/npm-board.module').then(m => m.NpmBoardModule)
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
