import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbCardComponent } from './dumb-card.component';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatExpansionModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule
  ],
  declarations: [DumbCardComponent]
})
export class DumbCardModule { }
