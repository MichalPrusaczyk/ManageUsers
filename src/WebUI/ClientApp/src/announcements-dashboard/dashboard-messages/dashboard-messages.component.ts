import { Component, OnInit } from '@angular/core';
import { AnnouncementModel } from 'src/announcements/models/announcement-model';
import { AnnouncementService } from 'src/announcements/services/announcements.service';

@Component({
  selector: 'app-dashboard-messages',
  templateUrl: './dashboard-messages.component.html',
  styleUrls: ['./dashboard-messages.component.scss']
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
    debugger;
    this.announcementService.getAnnouncements().subscribe({
      next:(data)=>{
        data.forEach((announcement) => {
          announcement.CreateDate = this.getDate(announcement.CreateDate);
        }
        );
        this.announcements = data;
      },
      error: (err) => { console.log(err);}
    });
  }

  getDate(date: Date){
    var number = date.toString().match(/\d+/);
    if(number != null){
      return new Date(parseInt(number[0]));
    }else{
      return new Date();
    }
  }

}
