import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dumb-card',
  templateUrl: './dumb-card.component.html',
  styleUrls: ['./dumb-card.component.scss']
})
export class DumbCardComponent implements OnInit, OnChanges {

  // for mat-expand
  public step: number | string | null = null;
  theme;
  @Input() cardData: any;
  constructor() { }

  ngOnInit() {
    this.theme = sessionStorage.getItem('theme') || 'rose-light';
  }

  ngOnChanges() {
    this.cardData = this.cardData;
  }
  setStep(index: number | string) {
    this.step = index;
  }

  unsetStep() {
    this.step = null;
  }

}
