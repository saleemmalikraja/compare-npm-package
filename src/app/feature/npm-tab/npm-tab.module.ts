import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../../app-routing.module';
import { NpmTabComponent } from './npm-tab.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  declarations: [NpmTabComponent],
  exports: [NpmTabComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class NpmTabModule { }
