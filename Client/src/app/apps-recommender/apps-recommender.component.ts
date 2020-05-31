import { Component, OnInit } from '@angular/core';
import { IApp } from '../interfaces/app';
import { AppsService } from '../services/apps.service';

@Component({
  selector: 'app-apps-recommender',
  templateUrl: './apps-recommender.component.html',
  styleUrls: ['./apps-recommender.component.css']
})
export class AppsRecommenderComponent implements OnInit {
  apps: IApp[];

  constructor(private appService:AppsService) { }

  ngOnInit(): void {
    this.apps=[];
  }

  onFilter(filterQuery:object): void{
    this.appService.getApps(filterQuery).subscribe(
      result => {this.apps = result}, 
      error => console.log('error fetching the apps', error));
  }

}
