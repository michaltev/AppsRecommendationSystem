import { Injectable } from '@angular/core';
import { AppsService } from './apps.service';

@Injectable({
  providedIn: 'root'
})
export class AppsFilterService {

  private apps:[];

  constructor(private appsService:AppsService) { }

  filterApps(p_filter: Object)
  {
    this.appsService.getApps(p_filter).subscribe(
      result => {this.apps = result; console.log(result);}, 
      error => console.log('error', error));
  }

  getApps()
  {
    return this.apps;
  }
}
