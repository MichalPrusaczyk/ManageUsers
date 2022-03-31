import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDefectComponent } from './report-defect.component';

describe('ReportDefectComponent', () => {
  let component: ReportDefectComponent;
  let fixture: ComponentFixture<ReportDefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDefectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
