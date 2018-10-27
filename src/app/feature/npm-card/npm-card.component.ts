import { Component,  AfterViewInit } from '@angular/core';
import { SharingService } from '../../core/data.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-npm-card',
  templateUrl: './npm-card.component.html',
  styleUrls: ['./npm-card.component.scss']
})
export class NpmCardComponent implements AfterViewInit {

  chartData;
  githubData;
  public step;
  public setStepIndex: number;
  public expandMore = false;

  constructor(private sharingService: SharingService) { }

  ngAfterViewInit() {
    this.sharingService.getData().pipe(delay(0)).subscribe((data: any) => {
      if (data && data.npmDatas) {
        this.chartData = data.npmDatas;
      }
      if (data && data.githubData) {
        this.githubData = data.githubData;
      }
      console.log('chartData', this.chartData);

    });
  }

}
