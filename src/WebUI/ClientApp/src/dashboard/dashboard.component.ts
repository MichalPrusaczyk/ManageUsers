// import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// type Theme = 'theme-light' | 'theme-dark'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}