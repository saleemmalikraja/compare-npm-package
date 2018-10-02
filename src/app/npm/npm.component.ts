import { Component, OnInit } from "@angular/core";
import { AppService } from '../core/app.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: "app-npm",
  templateUrl: "./npm.component.html",
  styleUrls: ["./npm.component.scss"],
  providers: [AppService]
})
export class NpmComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {

  }


  filterSource(source) {
    console.log(source);
    let currentDate = moment();
    let dayOne = currentDate.format('YYYY-MM-DD');
    let dayTwo = currentDate.subtract(30, 'days').format('YYYY-MM-DD');
    var config = {
      method: 'GET',
      apiUrl: 'apiUrlForNpm',
      endPoint: 'downloads/range/' + dayTwo + ':' + dayOne + '/' + source
    }

    this.appService.apiRequest(config).subscribe((data) => {

    },
      error => {
        console.error("Error saving food!");
        return throwError(error);  // Angular 5/RxJS 5.5
      })
  }

  getnewsSources() {

  }

  calculateDate(day) {
    let currentDate = moment();
    let dayOne = currentDate.format('YYYY-MM-DD');
    let dayTwo = currentDate.subtract(day, 'days').format('YYYY-MM-DD');
    var dateObj = {
      today: dayOne,
      nextDay: dayTwo
    }
    return dateObj;
  }
}
