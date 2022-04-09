import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsPanelComponent } from './announcements-panel.component';

describe('AnnouncementsPanelComponent', () => {
  let component: AnnouncementsPanelComponent;
  let fixture: ComponentFixture<AnnouncementsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
