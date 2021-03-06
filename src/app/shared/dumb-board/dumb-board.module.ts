import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbBoardComponent } from './dumb-board.component';
import { MatIconModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [DumbBoardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  exports: [DumbBoardComponent]
})
export class DumbBoardModule { }
