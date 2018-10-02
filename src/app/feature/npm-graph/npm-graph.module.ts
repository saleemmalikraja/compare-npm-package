import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpmGraphComponent } from './npm-graph.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  declarations: [NpmGraphComponent]
})
export class NpmGraphModule { }
