import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  apiRequest(args: any) {
    let hdrs = new HttpHeaders();

    if (args.token) {
      hdrs = hdrs.append('asp-auth', args.token);
    }

    const options = {
      headers: hdrs
    };

    const url = environment[args.apiUrl] + args.endPoint;
    if (args.method === 'GET') {
      return this.http.get(url, options);
    }

    if (args.method === 'POST') {
      return this.http.post(url, args.data || {}, options);
    }

    if (args.method === 'PUT') {
      return this.http.put(url, args.data || {}, options);
    }

    if (args.method === 'DELETE') {
      return this.http.delete(url, options);
    }

    throw new Error(`Unsupported method: ${args.method}`);
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
