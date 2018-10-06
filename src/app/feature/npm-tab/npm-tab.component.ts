import {
  Component, OnInit, EventEmitter,
  Input, Output, OnChanges, AfterViewInit
} from '@angular/core';
import { SharingService } from '../../core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-npm-tab',
  templateUrl: './npm-tab.component.html',
  styleUrls: ['./npm-tab.component.css']
})
export class NpmTabComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() chartData: any;
  @Input() gitData: any;
  @Output() chartDataEvent = new EventEmitter();
  constructor(private router: Router, private sharingService: SharingService) { }

  ngOnInit() {
    console.log('graphData', this.chartData);
  }

  ngOnChanges() {
    console.log('graph-tab', this.chartData);
    this.sharingService.setData(this.chartData);
    this.router.navigate(['/graphMode']);
  }
  ngAfterViewInit() {
  //  this.router.navigate(['/graphMode']);
  }
}
