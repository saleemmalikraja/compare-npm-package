import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dumb-board',
  templateUrl: './dumb-board.component.html',
  styleUrls: ['./dumb-board.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DumbBoardComponent implements OnChanges {
  @Input() packageDetail: any;
  @Output() copySuccessEvent = new EventEmitter();
  dataSource = [];
  selectedPackage = '';
  npmInstall = '';
  gitCloneUrl = '';
  licenseName = '';
  homePageUrl = '';
  version = '0.0.0';
  constructor() { }
  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copySuccessEvent.emit('copied');
  }

  ngOnChanges() {
    if (this.packageDetail.length) {
      this.dataSource = Array.from(new Set(this.packageDetail));
      if (this.dataSource.length) {
        const firstArrayValue = this.dataSource[0];
        this.selectedPackage = firstArrayValue.packageName;
        this.npmInstall = `npm install ${this.selectedPackage}`;
        this.gitCloneUrl = firstArrayValue.gitCloneUrl;
        this.version = firstArrayValue.version;
        this.homePageUrl = firstArrayValue.homepage;
        this.licenseName = firstArrayValue.license;
      }
    }
  }

  onSelect(selectedOption) {
    let index = -1;
    this.npmInstall = `npm install ${selectedOption}`;
    this.dataSource.forEach((eachElement, pkgArrIndex) => {
      index = eachElement.packageName.indexOf(selectedOption);
      if (index > -1) {
        const updatePackageData = this.dataSource[pkgArrIndex];
        this.version = updatePackageData.version;
        this.gitCloneUrl = updatePackageData.gitCloneUrl;
        this.homePageUrl = updatePackageData.homepage;
        this.licenseName = updatePackageData.license;
        return;
      }
    });
  }
}
