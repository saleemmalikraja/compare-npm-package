import {
  Component, OnInit, EventEmitter,
  Input, Output, OnChanges, AfterViewInit, ViewChild
} from '@angular/core';
import { SharingService } from '../../core/data.service';
import { Router } from '@angular/router';
import { NpmGraphComponent } from '../npm-graph/npm-graph.component';
@Component({
  selector: 'app-npm-tab',
  templateUrl: './npm-tab.component.html',
  styleUrls: ['./npm-tab.component.css']
})
export class NpmTabComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() packageData: any;
  @Input() gitData: any;
  @Output() packageDataEvent = new EventEmitter();
  @ViewChild('graphMode') graphMode: NpmGraphComponent;
  constructor(private router: Router, private sharingService: SharingService) { }

  ngOnInit() {
    console.log('graphData', this.packageData);
  }

  ngOnChanges() {
    console.log('graph-tab', this.packageData);
    this.sharingService.setData(this.packageData);
   // this.router.navigate(['/graphMode']);
  }
  ngAfterViewInit() {
    //  this.router.navigate(['/graphMode']);
  }
}
