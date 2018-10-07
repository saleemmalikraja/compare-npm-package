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
  githubData;
  constructor(private sharingService: SharingService) { }

  ngOnInit() {
    const data = this.sharingService.getData();
    if (data && data.npmDatas) {
      this.chartData = data.npmDatas;
    }
    if (data && data.githubData) {
      this.githubData = data.githubData;
    }
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
        type: 'line',
        backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(240, 240, 255)']
          ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: true,
        plotBorderWidth: 1,
        plotBorderColor: 'rgba(200, 200, 200, .9)'
      },
      colors: ['#FF0000', '#00FF00', '#0000FF', '#F44336' , '#424242',
    '#F57C00' , '#311b92' , '#4a148c', '#1b5e20', '#01579b', 'ff1744'],
      title: {
        text: 'NPM COMPARE'
      },
      credits: {
        enabled: false
      },
      series: this.chartData ? this.chartData.chart : [],
    });
    this.chart = chart;

  }

}
