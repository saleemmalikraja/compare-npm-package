import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbTabComponent } from './dumb-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    AppRoutingModule
  ],
  declarations: [DumbTabComponent],
  exports: [DumbTabComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DumbTabModule { }
