import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbTableComponent } from './dumb-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  declarations: [DumbTableComponent],
  exports: [DumbTableComponent]
})
export class DumbTableModule { }
