import { Component, OnInit, Input } from '@angular/core';

import { IApp } from '../data/app';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})
export class AppsTableComponent implements OnInit {

  displayedColumns: string[] = [];
  @Input() apps : IApp[];
  imageWidth = 45;
  imageMargin = 1;

  constructor() { 
   }

  ngOnInit(): void {
    this.displayedColumns = ["icon", "name", "category", "rating", "min_age"];
  }
}
