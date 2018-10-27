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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  declarations: [DumbCardComponent],
  exports: [DumbCardComponent]
})
export class DumbCardModule { }
