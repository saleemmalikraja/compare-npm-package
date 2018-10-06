import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SharingService } from '../../core/data.service';

@Component({
  selector: 'app-npm-graph',
  templateUrl: './npm-graph.component.html',
  styleUrls: ['./npm-graph.component.css']
})
export class NpmGraphComponent implements OnInit, OnChanges {
  @Input() chat: any;
  chartData;
  chart: Chart;
  constructor(private sharingService: SharingService) { }

  ngOnInit() {
    this.chartData = this.sharingService.getData();
    console.log('chartData', this.chartData);
    this.init();
  }
  ngOnChanges() {
    console.log('chartData', this.chartData);

    this.init();
  }
  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    this.chart.addSerie({
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    });
  }

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSerie(this.chart.ref.series.length - 1);
  }

  init() {
    const chart = new Chart({
      xAxis: {
        categories: this.chartData ? this.chartData.chartX : []
      },
      chart: {
        type: 'line'
      },
      title: {
        text: 'NPM COMPARE'
      },
      credits: {
        enabled: false
      },
      series: this.chartData ? this.chartData.chart : []
    });
    this.chart = chart;

  }

}
