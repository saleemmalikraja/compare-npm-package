import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SharingService } from '../../core/data.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-npm-table',
  templateUrl: './npm-table.component.html',
  styleUrls: ['./npm-table.component.css']
})
export class NpmTableComponent implements AfterViewInit {
  dataSource = [];
  chartData;
  gitHubData = [];
  constructor(private sharingService: SharingService) { }

  ngAfterViewInit() {
    this.sharingService.getData().pipe(delay(0)).subscribe((data) => {
      if (data && data.npmDatas) {
        this.chartData = data.npmDatas;
      }
      if (data && data.githubData) {
        this.gitHubData = data.githubData;
      }
      console.log('chartData', this.chartData);
    });
  }

}
