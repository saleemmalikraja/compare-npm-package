import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbBoardComponent } from './dumb-board.component';
import { MatIconModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [DumbBoardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [DumbBoardComponent]
})
export class DumbBoardModule { }
