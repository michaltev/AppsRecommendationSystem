import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-apps-filter-form',
  templateUrl: './apps-filter-form.component.html',
  styleUrls: ['./apps-filter-form.component.css']
})
export class AppsFilterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO: get categories
  }


  onSubmit(form: NgForm){
   console.log("in onSubmit: ", form.value);
  }

}
