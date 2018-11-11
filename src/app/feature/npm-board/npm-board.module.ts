import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmBoardComponent } from './npm-board.component';
import { DumbBoardModule } from 'src/app/shared/dumb-board/dumb-board.module';
import { RouterModule } from '@angular/router';
import { DumbBoardComponent } from '../../shared/dumb-board/dumb-board.component';

@NgModule({
  declarations: [NpmBoardComponent],
  imports: [
    CommonModule,
    DumbBoardModule,
    RouterModule.forChild([
      {
        path: '',
        component: DumbBoardComponent,  // tab 4
      }
    ])
  ]
})
export class NpmBoardModule { }
