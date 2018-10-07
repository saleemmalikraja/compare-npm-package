import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../core/data.service';

@Component({
  selector: 'app-npm-card',
  templateUrl: './npm-card.component.html',
  styleUrls: ['./npm-card.component.css']
})
export class NpmCardComponent implements OnInit {

  chartData;
  githubData;
  public step;
  public setStepIndex: number;
  public expandMore = false;

  constructor(private sharingService: SharingService) { }

  ngOnInit() {
    let data = this.sharingService.getData();
    if (data && data.npmDatas) {
      this.chartData = data.npmDatas;
    }
    if (data && data.githubData) {
      this.githubData = data.githubData;
    }
    console.log('chartData', this.chartData);

  }
  setStep(index: number) {
    this.expandMore = false;
    this.setStepIndex = index;
    this.step = index;
  }

  unsetStep(index: number) {
    if (this.setStepIndex === index) {
      this.expandMore = true;
    }
  }

}
