import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { VERSION } from 'src/environments/version';
import { PopupOverlayComponent } from './feature/popup-overlay/popup-overlay.component';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Compare NPM Package';
  version = '0.0.0';
  appId = 'rose-light';
  private readonly themeClassPrefix = 'app-theme-';
  readonly themeOptions = [
    { id: 'rose-light', label: 'Rose Light' },
    { id: 'rose-dark', label: 'Rose Dark' },
    { id: 'violet-light', label: 'Violet Light' },
    { id: 'violet-dark', label: 'Violet Dark' }
  ];

  constructor(
    meta: Meta,
    title: Title,
    public dialog: MatDialog,
    private swUpdate: SwUpdate,
    private overlayContainer: OverlayContainer
  ) {
    this.version = VERSION.tag;
    // Sets the <title></title>
    title.setTitle('Compare Node Package');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Saleem & Arumugam' },
      {
        name: 'description',
        content:
          'compare node package - An easiest way to find best node package among packages.'
      },
      {
        name: 'google-site-verification',
        content: 'nfIyuMqGaDSa7y2CV0g-Z0UGbwrLIb8zjTqHtWrjFvY'
      }
    ]);

    this.appId = sessionStorage.getItem('theme') || this.appId;
    sessionStorage.setItem('theme', this.appId);
    this.applyThemeToOverlays(this.appId);
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.pipe(
        filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY')
      ).subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
  switchTheme(appId: string) {
    this.appId = appId;
    sessionStorage.setItem('theme', appId);
    this.applyThemeToOverlays(appId);
  }

  private applyThemeToOverlays(appId: string) {
    const overlayClasses = this.overlayContainer.getContainerElement().classList;
    const themeClasses = this.themeOptions.map(({ id }) => `${this.themeClassPrefix}${id}`);

    overlayClasses.remove(...themeClasses);
    overlayClasses.add(`${this.themeClassPrefix}${appId}`);
  }

  demoLink() {
    const dialogRef = this.dialog.open(PopupOverlayComponent, {
      width: '720px',
      maxWidth: '95vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
