import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-npm-tab',
  templateUrl: './npm-tab.component.html',
  styleUrls: ['./npm-tab.component.css']
})
export class NpmTabComponent implements OnInit, OnChanges {
  @Input() grapData: any
  @Output() grapDataEven = new EventEmitter();
  grapDatas;
  constructor() { }

  ngOnInit() {
    console.log('grapData', this.grapData);
    this.grapDatas = this.grapData;
  }

  ngOnChanges() {
    console.log('grap-tab', this.grapData);
    this.grapDatas = this.grapData;
  }
}
