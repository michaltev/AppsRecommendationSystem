import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private http: HttpClient) { }

  getApps(p_filter : Object) : Observable<any>
  {
    /*const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict) 
    };*/

    return (this.http.post('http://localhost:3000/filter/apps', p_filter));
  }
}
