import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IApp } from '../data/app';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})
export class AppsTableComponent implements OnInit, OnChanges {

  displayedColumns: string[] = [];
  @Input() apps : IApp[];

  constructor() { 
   }

  ngOnInit(): void {
    this.displayedColumns = ["icon", "name", "category", "rating", "min_age"];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("on change!");
    // changes.prop contains the old and the new value...
  }

}
