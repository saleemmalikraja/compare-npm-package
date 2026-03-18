import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbBoardComponent } from './dumb-board.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [DumbBoardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [DumbBoardComponent]
})
export class DumbBoardModule { }
