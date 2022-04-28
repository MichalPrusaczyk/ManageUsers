import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'read-more',
  template: `<div [innerHTML]="currentText"></div><button class="btn btn--info readmore" [class.hidden]="hideToggle" (click)="toogleView()">Read {{isCollapsed? 'more':'less'}}</button>`,
  styleUrls: ['./read-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReadMoreComponent implements OnChanges {

  @Input() text: string;
  @Input() maxLength: number = 2;
  currentText: string;
  hideToggle: boolean = true;

  public isCollapsed: boolean = true;

  constructor(private elementRef: ElementRef) { }

  toogleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }
  
  determineView() {
    if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
  }
    this.hideToggle = false;
    if (this.isCollapsed == true) {
        this.currentText = this.text.substring(0, this.maxLength) + "...";
    } else if(this.isCollapsed == false)  {
        this.currentText = this.text;
    }
  }
  ngOnChanges() {
    this.determineView();
  }

}
