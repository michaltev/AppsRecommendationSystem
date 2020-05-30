import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
