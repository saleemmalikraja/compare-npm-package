import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppService {
  constructor(private http: Http) { }
  apiRequest(endPoint, args, apiUrl2) {
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    let hdrs = new HttpHeaders();

    if (args.token) {

      hdrs.append('asp-auth', args.token);

    }
    const options = {
      headers: hdrs
    };

    var url = '' + endPoint;
    if (args.method === "GET") {


      this.http.get(url)

    }
    if (args.method === "POST") {


      this.http.post(url, args.data || {}, '')

    }
    if (args.method === "PUT") {

      this.http.put(url, args.data || {}, '')


    }
    if (args.method === "DELETE") {


      this.http.delete(url)

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
   * 
   * @param key 
   * @param value 
   */
  updateData(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   * Delete the data with key
   * 
   * @param key 
   */
  deleteData(key) {
    localStorage.removeItem(key);
  }
}
