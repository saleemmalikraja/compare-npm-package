import { Component, OnInit } from "@angular/core";
import { AppService } from '../core/app.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6
import * as moment from 'moment'; // add this 1 of 4
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-npm",
  templateUrl: "./npm.component.html",
  styleUrls: ["./npm.component.scss"],
  providers: [AppService]
})
export class NpmComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  filteredOptions;
  constructor(private appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchString: [''],
    });

  }

  get f() { return this.searchForm.controls; }

  filterSource(source) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }
    console.log(source);
    let currentDate = moment();
    let dayOne = currentDate.format('YYYY-MM-DD');
    let dayTwo = currentDate.subtract(30, 'days').format('YYYY-MM-DD');
    var config = {
      method: 'GET',
      apiUrl: 'apiUrlForSearch',
      endPoint: this.searchForm.controls.searchString.value
    }

    this.appService.apiRequest(config).subscribe((res) => {
      this.filteredOptions = res['results'];
    },
      error => {
        console.error("Error saving food!");
        return throwError(error);  // Angular 5/RxJS 5.5
      })
  }

  getnewSources(source) {
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
