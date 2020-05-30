import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Observable } from 'rxjs';
import { AppsFilterService } from '../data/apps-filter.service';
import { CategoriesService } from '../data/categories.service';

@Component({
  selector: 'app-apps-filter-form',
  templateUrl: './apps-filter-form.component.html',
  styleUrls: ['./apps-filter-form.component.css']
})
export class AppsFilterFormComponent implements OnInit {

  filter: Object = {};
  categories: [];
  
  constructor(private svc:AppsFilterService, private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      result => {this.categories = result; console.log(result);},
      error => console.log('error', error));
  }


  onSubmit(form: NgForm){
   console.log("in onSubmit: ", form.value);
   this.svc.filterApps(this.filter);
  }

}
