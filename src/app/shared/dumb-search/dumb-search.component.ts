import { Component, OnInit } from '@angular/core';

import { AppService } from '../../core/app.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6
@Component({
  selector: 'app-dumb-search',
  templateUrl: './dumb-search.component.html',
  styleUrls: ['./dumb-search.component.scss']
})
export class DumbSearchComponent implements OnInit {


  constructor(private appService: AppService) { }

  ngOnInit() {

  }


  filterSource(source) {
    console.log(source);
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForNpm',
      endPoint: 'downloads/range/2018-9-03:2018-10-02/@angular/core'
    };

    this.appService.apiRequest(config).subscribe((data) => {

    },
      error => {
        console.error('Error filtering  source!');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }

  getnewsSources() {

  }

}
