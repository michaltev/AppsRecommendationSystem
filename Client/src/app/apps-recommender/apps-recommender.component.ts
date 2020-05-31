import { Component, OnInit } from '@angular/core';
import { AppsFilterService } from '../data/apps-filter.service';
import { IApp } from '../data/app';

@Component({
  selector: 'app-apps-recommender',
  templateUrl: './apps-recommender.component.html',
  styleUrls: ['./apps-recommender.component.css']
})
export class AppsRecommenderComponent implements OnInit {
  apps: IApp[];

  constructor(private filterService:AppsFilterService) { }

  ngOnInit(): void {
    this.apps=[];
  }

  onFilter(filterQuery:object): void{
    this.filterService.filterApps(filterQuery).subscribe(
      result => {this.apps = result}, 
      error => console.log('error', error));
  }

}
