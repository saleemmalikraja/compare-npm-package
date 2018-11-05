import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Compare Node Package';

  appId = 'theme1';
  constructor(meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle('Compare Node Package');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Saleem & Arumugam' },
      { name: 'description', content: 'compare node package.' },
      { name: 'google-site-verification', content: 'nfIyuMqGaDSa7y2CV0g-Z0UGbwrLIb8zjTqHtWrjFvY' }
    ]);

    sessionStorage.setItem('theme', this.appId);
  }
  switchTheme(appId: string) {
    this.appId = appId;
    sessionStorage.setItem('theme', appId);
  }
}
