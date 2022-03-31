import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReportModel } from './model/reportModel';

@Component({
  selector: 'app-report-defect',
  templateUrl: './report-defect.component.html',
  styleUrls: ['./report-defect.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportDefectComponent implements OnInit {

  reports: ReportModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
