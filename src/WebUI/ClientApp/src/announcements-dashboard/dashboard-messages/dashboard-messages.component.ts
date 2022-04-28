import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnnouncementModel } from 'src/announcements/models/announcement-model';
import { AnnouncementService } from 'src/announcements/services/announcements.service';

@Component({
  selector: 'app-dashboard-messages',
  templateUrl: './dashboard-messages.component.html',
  styleUrls: ['./dashboard-messages.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardMessagesComponent implements OnInit {
  
  public announcements: AnnouncementModel[] = [];
  constructor(
    private announcementService: AnnouncementService
  ) { }

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements(){
    this.announcementService.getAnnouncements().subscribe({
      next:(data)=>{
        data.forEach((announcement) => {
          // announcement.CreateDate = this.getDate(announcement.CreateDate);
        }
        );
        this.announcements = data;
        console.log(data);
        console.log(this.announcements);
      },
      error: (err) => { console.log(err);}
    });
  }

  getDate(date: Date){
    var number = date.toString()?.match(/\d+/);
    if(number != null){
      return new Date(parseInt(number[0]));
    }else{
      return new Date();
    }
  }

}
