import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IApp } from '../interfaces/app';

@Component({
  selector: 'app-apps-table',
  templateUrl: './apps-table.component.html',
  styleUrls: ['./apps-table.component.css']
})
export class AppsTableComponent implements OnInit, OnChanges {

  @Input() apps : IApp[];
  
  chosenApp:IApp;
  displayedColumns: string[] = [];
  imageWidth = 45;
  imageMargin = 1;

  constructor() { 
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.chosenApp=undefined;
  }

  ngOnInit(): void {
    this.displayedColumns = ["icon", "name", "category", "rating", "min_age"];
  }

  onRowClick(row:IApp): void{
    this.chosenApp = row;
  }
}
