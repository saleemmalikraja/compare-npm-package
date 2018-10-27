import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmGraphComponent } from './npm-graph.component';
import { ChartModule } from 'angular-highcharts';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    MatProgressSpinnerModule
  ],
  declarations: [NpmGraphComponent]
})
export class NpmGraphModule { }
