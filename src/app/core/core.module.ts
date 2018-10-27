import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PackageCompareInterceptor } from './http.interceptor';

@NgModule({
  imports: [CommonModule,
    HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PackageCompareInterceptor,
      multi: true
     }
  ],
  declarations: [],
  exports: []
})
export class CoreModule { }
