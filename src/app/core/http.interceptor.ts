import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpEventType,
  HttpErrorResponse
} from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PackageCompareInterceptor implements HttpInterceptor {
  // when we make any HTTP request, the user’s token will be attached automatically using interceptor
  public pendingRequests = 0;
  public showLoading = false;
  public sessionSplit;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler // to handle other interceptor
  ): Observable<HttpEvent<any>> {
    this.enableSpinner();
    this.pendingRequests++;
    const duplicate = req.clone({
      //  setHeaders: this.headerFields(req) // uncomment this to set header
    });

    return next
      .handle(duplicate) // passing control to the next interceptor in the chain
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Sent:
                console.log('Request sent!');
                break;
              case HttpEventType.ResponseHeader:
                console.log('Response header received!');
                break;
              case HttpEventType.DownloadProgress:
                const kbLoaded = Math.round(event.loaded / 1024);
                console.log(`Download in progress! ${kbLoaded}Kb loaded`);
                break;
              case HttpEventType.Response:
                console.log('Done!', event.body);
            }
            if (event instanceof HttpResponse) {
              // this.turnOffModal();
            }
          },
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                console.log(
                  'The authentication session expires or the user is not authorised.' +
                    'Force refresh of the current page.'
                );
              } else {
                return Observable.throw(err.error || 'Server error');
              }
            }
          }
        ),
        finalize(() => {
          this.disableSpinner();
        })
      );
  }

  public enableSpinner() {
    if (!this.showLoading) {
      this.showLoading = true;
      const node = document.createElement('compare-spinner');
      node.className = 'loading';
      document.body.querySelector('app-npm-tab').appendChild(node);
    }
    this.showLoading = true;
  }

  public disableSpinner() {
    this.pendingRequests--;
    if (this.pendingRequests <= 0) {
      if (this.showLoading) {
        const active = document.querySelectorAll('compare-spinner');
        for (let j = active.length - 1; j >= 0; j--) {
          if (active[j].parentNode) {
            active[j].parentNode.removeChild(active[j]);
          }
        }
      }
      this.showLoading = false;
    }
  }

  public headerFields(req?) {
    let headers: any = {};
    headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + this.sessionSplit,
      'Access-Control-Allow-Origin': '*'
    };
    return headers;
  }
}
