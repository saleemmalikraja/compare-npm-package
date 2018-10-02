import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbSearchComponent } from './dumb-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DumbSearchComponent],
  exports: [DumbSearchComponent]

})
export class DumbSearchModule { }
