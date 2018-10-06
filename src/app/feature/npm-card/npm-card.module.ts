import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmCardComponent } from './npm-card.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [NpmCardComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class NpmCardModule { }
