import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmTableComponent } from './npm-table.component';
import { DumbTableModule } from '../../shared/dumb-table/dumb-table.module';

import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    DumbTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: NpmTableComponent,  // tab 2
      }
    ])
  ],
  declarations: [NpmTableComponent]
})
export class NpmTableModule { }
