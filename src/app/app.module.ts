import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppService } from './core/app.service';
import { SharingService } from './core/data.service';

import { CoreModule } from './core/core.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NpmGraphModule } from './feature/npm-graph/npm-graph.module';
import { DumbNavbarModule } from './shared/dumb-navbar/dumb-navbar.module';
import { DumbSearchModule } from './shared/dumb-search/dumb-search.module';
import { NpmTabModule } from './feature/npm-tab/npm-tab.module';
import { NpmComponent } from './feature/npm/npm.component';

@NgModule({
  declarations: [
    AppComponent,
    NpmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NpmGraphModule,
    DumbNavbarModule,
    NpmTabModule,
    MatTabsModule,
    HttpClientModule,
    DumbSearchModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
  ],
  providers: [ AppService, SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
