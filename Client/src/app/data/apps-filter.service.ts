import { Injectable } from '@angular/core';
import { AppsService } from './apps.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppsFilterService {

  constructor(private appsService:AppsService) { }

  filterApps(p_filter: Object):Observable<any>
  {
    return (this.appsService.getApps(p_filter));
  }
}
