import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'npm compare';

  appId = 'theme1';

  switchTheme(appId: string) {
    this.appId = appId;
  }
}
