import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dumb-card',
  templateUrl: './dumb-card.component.html',
  styleUrls: ['./dumb-card.component.scss']
})
export class DumbCardComponent implements OnInit, OnChanges {

  // for mat-expand
  public step;
  public setStepIndex: number;
  public expandMore = false;
  theme;
  @Input() cardData: any;
  constructor() { }

  ngOnInit() {
    this.theme = sessionStorage.getItem('theme') || 'pink';
  }

  ngOnChanges() {
    this.cardData = this.cardData;
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
