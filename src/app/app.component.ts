import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { VERSION } from 'src/environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Compare Node Package';
  version = '0.0.0';
  appId = 'theme1';
  constructor(meta: Meta, title: Title) {
    this.version = VERSION.tag;
    // Sets the <title></title>
    title.setTitle('Compare Node Package');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Saleem & Arumugam' },
      { name: 'description', content: 'compare node package - An easiest way to find best node package among packages.'},
      { name: 'google-site-verification', content: 'nfIyuMqGaDSa7y2CV0g-Z0UGbwrLIb8zjTqHtWrjFvY' }
    ]);

    sessionStorage.setItem('theme', this.appId);
  }
  switchTheme(appId: string) {
    this.appId = appId;
    sessionStorage.setItem('theme', appId);
  }
}
