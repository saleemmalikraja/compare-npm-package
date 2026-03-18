import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HighchartsChartModule } from 'highcharts-angular';
import { NpmGraphComponent } from './npm-graph.component';

@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatProgressSpinnerModule
  ],
  declarations: [NpmGraphComponent]
})
export class NpmGraphModule { }
