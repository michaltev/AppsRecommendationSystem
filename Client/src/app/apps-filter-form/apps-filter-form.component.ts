import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Observable } from 'rxjs';
import { AppsFilterService } from '../data/apps-filter.service';
import { IFilter } from '../data/filter';

@Component({
  selector: 'app-apps-filter-form',
  templateUrl: './apps-filter-form.component.html',
  styleUrls: ['./apps-filter-form.component.css']
})
export class AppsFilterFormComponent implements OnInit {

  filter: Object = {};
  categories: [];
  
  constructor(private svc:AppsFilterService) { }

  ngOnInit(): void {
    // TODO: get categories
    this.categories = [];
  }


  onSubmit(form: NgForm){
   console.log("in onSubmit: ", form.value);
   this.svc.getFilterApps(this.filter);
  }

}
