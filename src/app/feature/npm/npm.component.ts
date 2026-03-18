import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { throwError } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AppService } from '../../core/app.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
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
  packageDetail: any = [];
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
      { name: 'description', content: 'compare node package - An easiest way to find best node package among packages.' },
      { name: 'google-site-verification', content: 'nfIyuMqGaDSa7y2CV0g-Z0UGbwrLIb8zjTqHtWrjFvY' }
    ]);
    /*   this.filteredLibs = this.formCtrl.valueChanges.pipe(
        startWith(null),
        map((libs: string | null) => libs ? this._filter(libs) : this.alllibs.slice())); */
  }

  get insightPackages(): any[] {
    return this.packageDetail.map((detail) => {
      const github = this.githubData.find((item: any) => item?.name === detail.packageName) || {};
      const chartSeries = this.chart.find((item: any) => item?.name === detail.packageName) || {};
      const latestDownloads = chartSeries.data?.length ? chartSeries.data[chartSeries.data.length - 1] : 0;

      return {
        ...detail,
        stars: github.stargazers_count || 0,
        forks: github.forks || github.forks_count || 0,
        openIssues: github.open_issues_count || 0,
        watchers: github.subscribers_count || 0,
        updatedAt: github.updated_at,
        repoUrl: github.html_url,
        homepage: github.homepage || detail.homepage,
        popularity: Math.round((detail.scoreDetail?.popularity || 0) * 100),
        quality: Math.round((detail.scoreDetail?.quality || 0) * 100),
        maintenance: Math.round((detail.scoreDetail?.maintenance || 0) * 100),
        dependencyCount: detail.dependencyCount || 0,
        dependencyNames: detail.dependencyNames || [],
        latestDownloads
      };
    });
  }

  get spotlightPackage(): any {
    return [...this.insightPackages].sort((left, right) => (right.stars || 0) - (left.stars || 0))[0] || null;
  }

  get freshestPackage(): any {
    return [...this.insightPackages].sort((left, right) => {
      return new Date(right.updatedAt || 0).getTime() - new Date(left.updatedAt || 0).getTime();
    })[0] || null;
  }

  get totalStars(): number {
    return this.insightPackages.reduce((total, item) => total + (item.stars || 0), 0);
  }

  get averageQuality(): number {
    if (!this.insightPackages.length) {
      return 0;
    }

    const total = this.insightPackages.reduce((sum, item) => sum + (item.quality || 0), 0);
    return Math.round(total / this.insightPackages.length);
  }

  get totalDependencies(): number {
    return this.insightPackages.reduce((total, item) => total + (item.dependencyCount || 0), 0);
  }

  formatCompactNumber(value: number): string {
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value || 0);
  }

  formatRelativeDate(value: string): string {
    return value ? moment(value).fromNow() : '—';
  }

  private getPackageName(label: string): string {
    return (label || '').split('-')[0].trim();
  }

  private refreshPackageData() {
    if (!this.libs.length && !this.chart.length && !this.githubData.length && !this.packageDetail.length) {
      this.packageData = null;
      this.sharingService.setData(this.packageData);
      return;
    }

    this.npmDatas = this.chart.length ? {
      chart: this.chart,
      chartX: this.chartX
    } : null;

    this.packageData = {
      npmDatas: this.npmDatas,
      githubData: this.githubData,
      packageDetail: this.packageDetail
    };

    this.sharingService.setData(this.packageData);
  }

  private getRegistryDetails(packageName: string) {
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForRegistry',
      endPoint: packageName
    };

    this.appService.apiRequest(config).subscribe((res: any) => {
      const latestVersion = res?.['dist-tags']?.latest;
      const latestPackage = latestVersion ? res?.versions?.[latestVersion] : null;
      const dependencyNames = Object.keys(latestPackage?.dependencies || {});
      const packageIndex = this.packageDetail.findIndex((detail: any) => detail.packageName === packageName);

      if (packageIndex < 0) {
        return;
      }

      this.packageDetail[packageIndex] = {
        ...this.packageDetail[packageIndex],
        dependencyCount: dependencyNames.length,
        dependencyNames: dependencyNames.slice(0, 6),
        homepage: latestPackage?.homepage || this.packageDetail[packageIndex].homepage,
        keywords: latestPackage?.keywords || []
      };

      this.refreshPackageData();
    });
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
    const packageName = this.getPackageName(libs);
    const index = this.libs.indexOf(libs);

    if (index >= 0) {
      this.libs.splice(index, 1);
      this.githubData = this.githubData.filter((item: any) => item?.name !== packageName);
      this.packageDetail = this.packageDetail.filter((item: any) => item?.packageName !== packageName);
      this.chart = this.chart.filter((item: any) => item?.name !== packageName);
      this.refreshPackageData();
    }
  }

  clearAll() {
    this.npmDatas = null;
    this.chartData = null;
    this.chart = [];
    this.chartX = [];
    this.githubData = [];
    this.packageDetail = [];
    this.libs = [];
    this.packageData = null;
    this.sharingService.setData(this.packageData);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedValue = event.option.value;

    if (selectedValue === '0 Result' || this.libs.includes(selectedValue)) {
      return;
    }

    this.libs.push(selectedValue);
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
    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForSearch',
      endPoint: val.toLowerCase()
    };
    this.appService.apiRequest(config).subscribe((res: any) => {
      if (!res) {
        return;
      }
      this.filteredOptions = res['results'];
      // tslint:disable-next-line:max-line-length
      // {"total":829186,"results":[{"package":{"name":"async","scope":"unscoped","version":"2.6.1","description":"Higher-order functions and common patterns for asynchronous code","keywords":["async","callback","module","utility"],"date":"2018-05-21T04:34:29.126Z","links":{"npm":"https://www.npmjs.com/package/async","homepage":"https://caolan.github.io/async/","repository":"https://github.com/caolan/async","bugs":"https://github.com/caolan/async/issues"},"author":{"name":"Caolan McMahon"},"publisher":{"username":"aearly","email":"alexander.early@gmail.com"},"maintainers":[{"username":"aearly","email":"alexander.early@gmail.com"},{"username":"beaugunderson","email":"beau@beaugunderson.com"},{"username":"caolan","email":"caolan.mcmahon@gmail.com"},{"username":"hargasinski","email":"argasinski.hubert@gmail.com"},{"username":"megawac","email":"megawac@gmail.com"}]},"score":{"final":0.9845409258247497,"detail":{"quality":0.9995613428277461,"popularity":0.9563379168759042,"maintenance":0.99986929162817}},"searchScore":0.76245373}]}
      res.results.forEach((resultant, ind) => {
        const packageInfo = resultant.package;
        this.alllibs.push(`${packageInfo.name} - ${packageInfo.version}`);
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
    source = this.getPackageName(source);
    let sourceObj;
    this.filteredOptions.forEach((val, ind) => {
      if (val.package.name === source) {
        sourceObj = val;

        const exists = this.packageDetail.some((detail: any) => detail.packageName === val.package.name);
        if (!exists) {
          this.packageDetail.push({
            packageName: `${val.package.name}`,
            version: `${val.package.version}`,
            description: val.package.description,
            homepage: val.package.links?.homepage,
            npmUrl: val.package.links?.npm,
            scoreDetail: val.score?.detail,
            scoreFinal: Math.round((val.score?.final || 0) * 100)
          });
        }

        this.getRegistryDetails(source);
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
      this.chartData = data;
      const chart = [];
      this.chartData.downloads.forEach((val, ind) => {
        chart.push(val.downloads);
        if (!this.chartX.includes(val.day)) {
          this.chartX.push(val.day);
        }
      });

      const existingSeriesIndex = this.chart.findIndex((item: any) => item?.name === source);
      if (existingSeriesIndex >= 0) {
        this.chart[existingSeriesIndex] = {
          name: source,
          data: chart
        };
      } else {
        this.chart.push({
          name: source,
          data: chart
        });
      }

      this.refreshPackageData();

      if (sourceObj) { this.getGithubDetails(sourceObj); }
    },
      error => {
        console.error('Error forming chart object!');
        return throwError(error);  // Angular 5/RxJS 5.5
      });
  }
  getGithubDetails(data) {
    const link = data.package.links.repository;
    let author;
    if (link) {
      author = link.split('.com')[1].replace('.git', '');
    }

    if (!author) {
      return;
    }

    const config = {
      method: 'GET',
      apiUrl: 'apiUrlForGit',
      endPoint: author
    };

    this.appService.apiRequest(config).subscribe((res: any) => {
      console.log(res);
      if (!res) {
        return;
      }

      const githubIndex = this.githubData.findIndex((item: any) => item?.name === res?.name);
      if (githubIndex >= 0) {
        this.githubData[githubIndex] = res;
      } else {
        this.githubData.push(res);
      }

      this.refreshPackageData();

    },
      error => {
        console.error('Error forming package data!');
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
