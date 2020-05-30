import { Component, OnInit } from '@angular/core';

import { IApp } from '../data/app';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})
export class AppsTableComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource : IApp[] = [];

  constructor() {
    this.displayedColumns = ["icon", "name", "category", "rating", "min_age"];
  }

  ngOnInit(): void {
    
  }

}
