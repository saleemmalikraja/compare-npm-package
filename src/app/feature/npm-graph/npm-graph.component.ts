import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SharingService } from '../../core/data.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-npm-graph',
  templateUrl: './npm-graph.component.html',
  styleUrls: ['./npm-graph.component.scss']
})
export class NpmGraphComponent implements OnChanges, AfterViewInit {
  @Input() chat: any;
  chartData = null;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  updateFlag = false;
  githubData;
  showSpinner = false;
  colors = ['#FF0000', '#00FF00', '#0000FF', '#F44336', '#424242',
    '#F57C00', '#311b92', '#4a148c', '#1b5e20', '#01579b', 'ff1744'];
  constructor(private sharingService: SharingService) { }

  ngAfterViewInit() {
    this.showSpinner = true;
    this.sharingService.getData().pipe(delay(0)).subscribe((data: any) => {
      this.showSpinner = false;
      if (data && data.npmDatas) {
        this.chartData = data.npmDatas;
      }
      if (data && data.githubData) {
        this.githubData = data.githubData;
      }
      this.init(this.colors[Math.floor(Math.random() * this.colors.length)]);
    }, (error) => {
      this.showSpinner = false;
    });
  }
  ngOnChanges() {
    console.log('chartData', this.chartData);
    this.init(this.colors[Math.floor(Math.random() * this.colors.length)]);
  }

  init(color: string) {
    this.chartOptions = {
      series: (this.chartData?.chart || []).map((val: any) => ({
        type: 'line',
        name: val.name,
        data: val.data
      })),
      xAxis: {
        categories: this.chartData ? this.chartData.chartX : [],
        title: {
          text: 'Downloaded Date',
          style: { color: 'black' }
        }
      },
      yAxis: {
        title: {
          text: 'Downloads Count',
          style: { color: 'black' }
        }
      },
      chart: {
        type: 'line',
        height: 420,
        backgroundColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
          },
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
      colors: ['#FF0000', '#00FF00', '#0000FF', '#F44336', '#424242',
        '#F57C00', '#311b92', '#4a148c', '#1b5e20', '#01579b', 'ff1744'],
      title: {
        text: 'NPM Compare'
      },
      legend: {
        align: 'left',
        verticalAlign: 'top'
      },
      tooltip: {
        shared: true,
        valueDecimals: 0
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      credits: {
        enabled: false
      }
    };
    this.updateFlag = true;
  }

}
