import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../core/data.service';
@Component({
  selector: 'app-npm-table',
  templateUrl: './npm-table.component.html',
  styleUrls: ['./npm-table.component.css']
})
export class NpmTableComponent implements OnInit {
  dataSource = [];
  chartData;
  gitHubData = [];
  constructor(private sharingService: SharingService) { }

  ngOnInit() {
    const data = this.sharingService.getData();
    if (data && data.npmDatas) {
      this.chartData = data.npmDatas;
    }
    if (data && data.githubData) {
      this.gitHubData = data.githubData;
    }
    console.log('chartData', this.chartData);
  }

}
