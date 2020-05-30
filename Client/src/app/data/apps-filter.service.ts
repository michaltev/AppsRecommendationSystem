import { Injectable } from '@angular/core';
import { AppsService } from './apps.service';
import { IFilter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class AppsFilterService {

  apps:[];

  constructor(private appsService:AppsService) { }

  getFilterApps(p_filter: Object)
  {
    this.appsService.getApps(p_filter).subscribe(
      result => console.log('success:', result), 
      error => console.log('error', error));
  }
}
