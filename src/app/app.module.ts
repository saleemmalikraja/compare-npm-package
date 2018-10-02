import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NpmComponent } from './npm/npm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from './core/theme.service';
import { AppService } from './core/app.service';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    NpmComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
  ],
  providers: [ThemeService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
