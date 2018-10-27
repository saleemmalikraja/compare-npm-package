import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmCardComponent } from './npm-card.component';
import { DumbCardModule } from '../../shared/dumb-card/dumb-card.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    DumbCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: NpmCardComponent,  // tab 3
      }
    ])
  ],
  declarations: [NpmCardComponent]
})
export class NpmCardModule { }
