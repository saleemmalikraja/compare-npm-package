import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material';
import { AppRoutingModule } from '../../app-routing.module';
import { NpmTabComponent } from './npm-tab.component';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
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
