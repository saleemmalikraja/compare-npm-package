import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6
import * as moment from 'moment'; // add this 1 of 4
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, switchAll } from 'rxjs/operators';
import { AppService } from '../../core/app.service';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith, distinct } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { SharingService } from '../../core/data.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.scss'],
  providers: [AppService],
  encapsulation: ViewEncapsulation.None
})
export class NpmComponent implements OnInit, AfterViewInit {
  submitted = false;
  filteredOptions;
  chartData;
  chart = [];
  chartX = [];
  npmDatas;
  githubData = [];
  packageData;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeyCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  filteredLibs: string[] = [];
  libs: string[] = [];
  alllibs: string[] = [];
  @ViewChild('libsInput') libsInput: ElementRef<HTMLInputElement>;
  constructor(private sharingService: SharingService, private appService:
    AppService, private formBuilder: FormBuilder, meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle('Compare Node Package');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Saleem & Arumugam' },
      { name: 'description', content: 'compare node package - An easiest way to find best node package among packages.'},
      { name: 'google-site-verification', content: 'nfIyuMqGaDSa7y2CV0g-Z0UGbwrLIb8zjTqHtWrjFvY' }
    ]);
    /*   this.filteredLibs = this.formCtrl.valueChanges.pipe(
        startWith(null),
        map((libs: string | null) => libs ? this._filter(libs) : this.alllibs.slice())); */
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim() && !(value === '0 Result')) {
      this.libs.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.formCtrl.setValue(null);
  }

  remove(libs: string): void {
    const index = this.libs.indexOf(libs);

    if (index >= 0 && this.packageData) {
      this.libs.splice(index, 1);
      this.packageData.githubData.splice(index, 1);
      this.packageData.npmDatas.chart.splice(index, 1);
      this.packageData.npmDatas.chartX.splice(index, 1);
      this.sharingService.setData(this.packageData);
    }
  }
  clearAll() {
    this.npmDatas = {};
    this.chartData = {};
    const libsClone = Array.from(this.libs);
    if (libsClone.length) {
      libsClone.forEach(removeLib => {
        this.remove(removeLib);
        console.log(libsClone);
      });
      this.packageData = null;
      this.sharingService.setData(this.packageData);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedValue = event.option.value;
    if (!(selectedValue === '0 Result')) { this.libs.push(selectedValue); }
    this.getnewSources(event.option.viewValue);
    this.libsInput.nativeElement.value = '';
    // this.formCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alllibs.filter(libs => libs.toLowerCase().includes(filterValue));
  }
  ngOnInit() {
    const initialRequest = `not:deprecated,insecure,unstable&size=5`;
    const pqmEnabled = true;
    this.filterSource(initialRequest, pqmEnabled);
  }

  ngAfterViewInit() {
    this.formCtrl.valueChanges.pipe(debounceTime(500)).subscribe(val => {
      console.log('debounce', val);
      this.filteredOptions = [];
      this.filterSource(val);
    });
  }

  filterSource(val, pqmEnabled?) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formCtrl.invalid) {
      return;
    }
    const currentDate = moment();
    const dayOne = currentDate.format('YYYY-MM-DD');
    const dayTwo = currentDate.subtract(30, 'days').format('YYYY-MM-DD');
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForSearch',
      endPoint: val.toLowerCase()
    };
    this.appService.apiRequest(config).pipe(switchAll()).subscribe((res: any) => {
      if (!res) {
        return;
      }
      this.filteredOptions = res['results'];

      res.results.forEach((resultant, ind) => {
        this.alllibs.push(resultant.package.name);
      });
      this.alllibs = Array.from(new Set(this.alllibs));
      const userInput = this.formCtrl.value || '';
      this.filteredLibs = [];
      if (this.alllibs.length) {
        this.alllibs.forEach((value, index) => {
          if (value.toLowerCase().includes(userInput.trim().toLowerCase())) {
            this.filteredLibs.push(value);
          }
        });
      }
      if (!this.filteredLibs.length) {
        this.filteredLibs.push('0 Result');
      }
      if (pqmEnabled && this.filteredLibs.length) {
        this.filteredLibs.forEach(eachLibName => {
          const event: any = {};
          event.option = {};
          event.option.value = eachLibName;
          event.option.viewValue = eachLibName;
          this.selected(event);
        });
      }
      console.log(res);

    },
      error => {
        console.error('Error saving !');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }

  getnewSources(source) {
    console.log(source);
    let sourceObj;
    this.filteredOptions.forEach((val, ind) => {
      if (val.package.name === source) {
        sourceObj = val;
      }
    });
    const currentDate = moment();
    const dayOne = currentDate.format('YYYY-MM-DD');
    const dayTwo = currentDate.subtract(30, 'days').format('YYYY-MM-DD');
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForNpm',
      endPoint: 'downloads/range/' + dayTwo + ':' + dayOne + '/' + source
    };

    this.appService.apiRequest(config).subscribe((data) => {
      console.log('npm data', data);
      this.chartData = data[0];
      const chart = [];
      this.chartData.downloads.forEach((val, ind) => {
        chart.push(val.downloads);
        this.chartX.push(val.day);
      });
      this.chart.push({
        name: source,
        data: chart
      });
      this.npmDatas = {
        chart: this.chart,
        chartX: this.chartX
      };
      if (sourceObj) { this.getGithubDetails(sourceObj); }
    },
      error => {
        console.error('Error saving food!');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }
  getGithubDetails(data) {
    const link = data.package.links.repository;
    let author;
    if (link) {
      author = link.split('.com')[1].replace('.git', '');
    }
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForGit',
      endPoint: author
    };

    this.appService.apiRequest(config).subscribe((res) => {
      console.log(res);
      if (!res && !res[0]) {
        return;
      }
      this.githubData.push(res[0]);
      this.packageData = {
        npmDatas: this.npmDatas,
        githubData: this.githubData
      };

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
