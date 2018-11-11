import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb-board',
  templateUrl: './dumb-board.component.html',
  styleUrls: ['./dumb-board.component.scss']
})
export class DumbBoardComponent implements OnChanges {
  @Input() packageDetail: any;
  @Output() copySuccessEvent = new EventEmitter();
  dataSource = [];
  selectedPackage = '';
  npmInstall = '';
  gitCloneUrl = '';
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
        this.selectedPackage = this.dataSource[0].packageName;
        this.npmInstall = `npm install ${this.selectedPackage}`;
        this.gitCloneUrl = this.dataSource[0].gitCloneUrl;
        this.version = this.dataSource[0].version;
      }
    }
  }

  onSelect(selectedOption) {
    let index = -1;
    this.npmInstall = `npm install ${selectedOption}`;
    this.dataSource.forEach((eachElement, pkgArrIndex) => {
      index = eachElement.packageName.indexOf(selectedOption);
      if (index > -1) {
        this.version = this.dataSource[pkgArrIndex].version;
        this.gitCloneUrl = this.dataSource[pkgArrIndex].gitCloneUrl;
        return;
      }
    });
  }
}
