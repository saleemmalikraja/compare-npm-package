import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NpmComponent } from './npm/npm.component';
import { ThemeService } from './core/theme.service';
import { AppService } from './core/app.service';
import { CoreModule } from './core/core.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DumbTabModule } from './shared/dumb-tab/dumb-tab.module';
import { NpmGraphModule } from './feature/npm-graph/npm-graph.module';
import { NpmTableModule } from './feature/npm-table/npm-table.module';
import { NpmCardModule } from './feature/npm-card/npm-card.module';
import { DumbNavbarModule } from './shared/dumb-navbar/dumb-navbar.module';
import { DumbSearchModule } from './shared/dumb-search/dumb-search.module';

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
    NpmTableModule,
    DumbNavbarModule,
    NpmCardModule,
    DumbTabModule,
    MatTabsModule,
    HttpClientModule,
    DumbSearchModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
  ],
  providers: [ThemeService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
