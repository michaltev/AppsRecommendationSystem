import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { CategoriesService } from '../data/categories.service';
import { IFilter } from '../data/filter';

@Component({
  selector: 'app-apps-filter-form',
  templateUrl: './apps-filter-form.component.html',
  styleUrls: ['./apps-filter-form.component.css']
})
export class AppsFilterFormComponent implements OnInit {

  @Output() filterQuery = new EventEmitter<object>();

  filter:IFilter = {
    birthYear:undefined,
    chosenCategory:undefined,
    minAppRating:undefined
  };
  categories: [];
  
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      result => this.categories = result,
      error => console.log('error fetching the categories', error));
  }

  onSubmit(form: NgForm){
   this.filterQuery.emit(this.filter);
  }

}
