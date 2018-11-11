import { Component, AfterViewInit } from '@angular/core';
import { SharingService } from 'src/app/core/data.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-npm-board',
  templateUrl: './npm-board.component.html',
  styleUrls: ['./npm-board.component.scss']
})
export class NpmBoardComponent implements AfterViewInit {

  dataSource = [];
  chartData;
  packageDetail = [];
  constructor(private sharingService: SharingService) { }

  ngAfterViewInit() {
    this.sharingService.getData().pipe(delay(0)).subscribe((data: any) => {
      if (data && data.packageDetail) {
        this.packageDetail = data.packageDetail;
      }
      console.log('package detail data', this.packageDetail);
    });
  }

}
