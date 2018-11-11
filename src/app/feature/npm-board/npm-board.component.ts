import { Component, AfterViewInit } from '@angular/core';
import { SharingService } from 'src/app/core/data.service';
import { delay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-npm-board',
  templateUrl: './npm-board.component.html',
  styleUrls: ['./npm-board.component.scss']
})
export class NpmBoardComponent implements AfterViewInit {

  dataSource = [];
  chartData;
  packageDetail = [];
  githubDetail = [];
  constructor(private sharingService: SharingService, public snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.sharingService.getData().pipe(delay(0)).subscribe((data: any) => {
      const sendDataToDumb = [];
      if (data && data.packageDetail) {
        const packageArray = data.packageDetail;
        const githubDetailArray = data.githubData;
        packageArray.forEach(eachPkgDetail => {
          githubDetailArray.forEach(eachGithubDetail => {
            if (eachPkgDetail.packageName === eachGithubDetail.name) {
              eachPkgDetail['gitCloneUrl'] = eachGithubDetail.git_url; // getting git clone url from github datum
             sendDataToDumb.push(eachPkgDetail);
            }
          });
        });
      }
    this.packageDetail = sendDataToDumb;
    });
  }

  copySuccessEvent(event) {
    console.log(event);
    this.snackBar.open(`${event}..!`, '', { duration: 500, direction: 'ltr', horizontalPosition: 'center' });
  }
}
