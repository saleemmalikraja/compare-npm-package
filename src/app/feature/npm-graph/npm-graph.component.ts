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
    const styles = getComputedStyle(document.documentElement);
    const appText = styles.getPropertyValue('--app-text').trim() || '#141927';
    const appMuted = styles.getPropertyValue('--app-muted').trim() || '#636b7c';
    const appBorder = styles.getPropertyValue('--app-border').trim() || 'rgba(20, 25, 39, 0.08)';
    const panelFill = styles.getPropertyValue('--app-chart-surface').trim() || 'rgba(255,255,255,0.72)';
    const plotFill = styles.getPropertyValue('--app-chart-plot').trim() || 'rgba(255,255,255,0.18)';
    this.chartOptions = {
      series: (this.chartData?.chart || []).map((val: any) => ({
        type: 'line',
        name: val.name,
        data: val.data
      })),
      xAxis: {
        categories: this.chartData ? this.chartData.chartX : [],
        lineColor: appBorder,
        tickColor: appBorder,
        labels: {
          style: { color: appMuted }
        },
        title: {
          text: 'Downloaded Date',
          style: { color: appMuted }
        }
      },
      yAxis: {
        gridLineColor: appBorder,
        labels: {
          style: { color: appMuted }
        },
        title: {
          text: 'Downloads Count',
          style: { color: appMuted }
        }
      },
      chart: {
        type: 'line',
        height: 360,
        backgroundColor: panelFill,
        borderWidth: 1,
        borderColor: appBorder,
        plotBackgroundColor: plotFill,
        plotShadow: false,
        plotBorderWidth: 1,
        plotBorderColor: appBorder,
        borderRadius: 24,
        spacing: [24, 24, 24, 24]
      },
      colors: ['#FF0000', '#00FF00', '#0000FF', '#F44336', '#424242',
        '#F57C00', '#311b92', '#4a148c', '#1b5e20', '#01579b', 'ff1744'],
      title: {
        text: 'NPM Compare',
        style: {
          color: appText,
          fontWeight: '700'
        }
      },
      legend: {
        align: 'left',
        verticalAlign: 'top',
        itemStyle: {
          color: appText
        },
        itemHoverStyle: {
          color: color
        }
      },
      tooltip: {
        shared: true,
        valueDecimals: 0,
        backgroundColor: panelFill,
        borderColor: appBorder,
        style: {
          color: appText
        }
      },
      plotOptions: {
        series: {
          color,
          lineWidth: 3,
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
