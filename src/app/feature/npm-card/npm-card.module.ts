import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmCardComponent } from './npm-card.component';
import { DumbCardComponent } from '../../shared/dumb-card/dumb-card.component';
import { DumbCardModule } from '../../shared/dumb-card/dumb-card.module';

@NgModule({
  imports: [
    CommonModule,
    DumbCardModule
  ],
  declarations: [NpmCardComponent]
})
export class NpmCardModule { }
