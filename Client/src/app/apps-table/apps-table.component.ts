import { Component, OnInit } from '@angular/core';

import { IApp } from '../data/app';
import { AppsFilterService } from '../data/apps-filter.service';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})
export class AppsTableComponent implements OnInit {

  displayedColumns: string[] = [];
  apps : IApp[] = [];

  constructor(private filterService:AppsFilterService) { 
   }

  ngOnInit(): void {
    this.displayedColumns = ["icon", "name", "category", "rating", "min_age"];
    this.apps = this.filterService.getApps();
  }

}
