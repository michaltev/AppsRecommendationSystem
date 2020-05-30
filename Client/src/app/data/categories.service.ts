import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() : Observable<any>
  {
    return (this.http.get('http://localhost:3000/categories'));
  }
}



@Injectable({
  providedIn: 'root'
})
export class AppsService {

  
}
