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
    this.updateApps();
  }

  updateApps(): void{
    this.apps = this.filterService.getApps();
  }

  onFilter(filterQuery:object): void{
    this.filterService.filterApps(filterQuery);
    this.updateApps();
  }

}
