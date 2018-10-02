import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb-card',
  templateUrl: './dumb-card.component.html',
  styleUrls: ['./dumb-card.component.css']
})
export class DumbCardComponent implements OnInit {

  // for mat-expand
  public step;
  public setStepIndex: number;
  public expandMore = false;
  constructor() { }

  ngOnInit() {
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
