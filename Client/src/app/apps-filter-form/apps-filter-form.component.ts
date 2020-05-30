import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { CategoriesService } from '../data/categories.service';

@Component({
  selector: 'app-apps-filter-form',
  templateUrl: './apps-filter-form.component.html',
  styleUrls: ['./apps-filter-form.component.css']
})
export class AppsFilterFormComponent implements OnInit {

  @Output() filterQuery = new EventEmitter<object>();
  filter:object={};
  categories: [];
  
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.filter = {};
    this.categoriesService.getCategories().subscribe(
      result => this.categories = result,
      error => console.log('error fetching the categories', error));
  }


  onSubmit(form: NgForm){
   this.filterQuery.emit(this.filter);
  }

}
