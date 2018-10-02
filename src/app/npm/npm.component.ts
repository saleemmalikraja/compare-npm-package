import { Component, OnInit } from "@angular/core";
import { AppService } from '../core/app.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6

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


  filterNews(source) {
    console.log(source);
    var endPoint = 'downloads/range/2018-9-03:2018-10-02/@angular/core';
    var config = {
      method: 'GET',
    }

    this.appService.apiRequest(endPoint, config).subscribe((data) => {

    },
      error => {
        console.error("Error saving food!");
        return throwError(error);  // Angular 5/RxJS 5.5
      })
  }

  getnewsSources() {

  }
}
