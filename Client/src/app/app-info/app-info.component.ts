import { Component, OnInit, Input } from '@angular/core';
import { IApp } from '../data/app';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  @Input() app : IApp;

  constructor() { }

  ngOnInit(): void {
  }

}
