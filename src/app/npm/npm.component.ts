import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../core/app.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6
import * as moment from 'moment'; // add this 1 of 4
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.scss'],
  providers: [AppService]
})
export class NpmComponent implements OnInit, AfterViewInit {
  searchForm: FormGroup;
  submitted = false;
  filteredOptions;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchString: [''],
    });

  }

  ngAfterViewInit() {
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      console.log("debouse", val);
      this.filterSource('', val.searchString);
    })
  }
  get f() { return this.searchForm.controls; }

  filterSource(event, data) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }
    const currentDate = moment();
    const dayOne = currentDate.format('YYYY-MM-DD');
    const dayTwo = currentDate.subtract(30, 'days').format('YYYY-MM-DD');
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForSearch',
      endPoint: this.searchForm.controls.searchString.value
    };

    this.appService.apiRequest(config).subscribe((res) => {
      if (!res) {
        return;
      }
      this.filteredOptions = res[0]['results'];
      console.log(res);

    },
      error => {
        console.error('Error saving !');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }

  getnewSources(source) {
    console.log(source);
    const currentDate = moment();
    const dayOne = currentDate.format('YYYY-MM-DD');
    const dayTwo = currentDate.subtract(30, 'days').format('YYYY-MM-DD');
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForNpm',
      endPoint: 'downloads/range/' + dayTwo + ':' + dayOne + '/' + source.package.name
    };

    this.appService.apiRequest(config).subscribe((data) => {
      console.log('npm data', data);
      this.getGithubDetails(source);
    },
      error => {
        console.error('Error saving food!');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }
  getGithubDetails(data) {
    const link = data.package.links.repository;
    const author = link.split('.com')[1].replace('.git', '');
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForGit',
      endPoint: author
    };

    this.appService.apiRequest(config).subscribe((res) => {
      console.log(res);

    },
      error => {
        console.error('Error saving food!');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }
  calculateDate(day) {
    const currentDate = moment();
    const dayOne = currentDate.format('YYYY-MM-DD');
    const dayTwo = currentDate.subtract(day, 'days').format('YYYY-MM-DD');
    const dateObj = {
      today: dayOne,
      nextDay: dayTwo
    };
    return dateObj;
  }
}
