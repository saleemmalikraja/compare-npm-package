import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { forkJoin } from 'rxjs';  // change to new RxJS 6 import syntax

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  apiRequest(args) {
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    const hdrs = new HttpHeaders();

    if (args.token) {

      hdrs.append('asp-auth', args.token);

    }
    const options = {
      headers: hdrs
    };

    const url = environment[args.apiUrl] + args.endPoint;
    if (args.method === 'GET') {

      return forkJoin(
        this.http.get(url)
      );
    }

    if (args.method === 'POST') {

      return forkJoin(
        this.http.post(url, args.data || {}, options)
      );
    }

    if (args.method === 'PUT') {
      return forkJoin(
        this.http.put(url, args.data || {}, options)
      );
    }

    if (args.method === 'DELETE') {
      return forkJoin(
        this.http.delete(url)
      );
    }
  }
  /**
   * get the localstorage data with key
   */
  getData(key) {
    return localStorage.getItem(key);

  }

  /**
   * store string , object, array into localstorage
   * @param key
   * @param value
   */
  updateData(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   * Delete the data with key
   * @param key
   */
  deleteData(key) {
    localStorage.removeItem(key);
  }
}
