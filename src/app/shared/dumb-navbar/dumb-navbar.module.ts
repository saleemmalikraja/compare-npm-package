import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbNavbarComponent } from './dumb-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [DumbNavbarComponent],
  exports: [DumbNavbarComponent]
})
export class DumbNavbarModule { }
