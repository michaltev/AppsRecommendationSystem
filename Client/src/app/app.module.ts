import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsFilterFormComponent } from './apps-filter-form/apps-filter-form.component';
import { AppsTableComponent } from './apps-table/apps-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsFilterFormComponent,
    AppsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
