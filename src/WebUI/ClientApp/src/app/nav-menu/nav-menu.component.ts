import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

const body = document.body.classList;
const themeLight = 'theme-light';
const themeDark = 'theme-dark';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavMenuComponent implements OnInit {

    // currentTheme: Theme = 'theme-light';
    constructor(@Inject(DOCUMENT) private document: Document) {
      body.add(themeLight);
    }
  
    switchTheme() {
      body.contains(themeLight) ? body.replace(themeLight, themeDark) : body.replace(themeDark, themeLight);
    }
  
  ngOnInit(): void {
  }

}
