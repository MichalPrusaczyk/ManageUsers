import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AnnouncementModel, AnnouncementCategory } from '../models/announcement-model';

declare var Alert: any;

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private baseUrl = `${window.location.origin}/api/announcements`;
  private announcemntsData: AnnouncementModel[] = [];
  private announcementsCategory: AnnouncementCategory[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAnnouncements() {
    return this.http.get<AnnouncementModel[]>(`${this.baseUrl}/getAnnouncement_GetCurrent`);
  }

  getAnnouncementsCategory(): Observable<AnnouncementCategory[]>{
    return of(this.announcementsCategory);
  }

  getDataForDashboard(): void {
    this.http.get<AnnouncementCategory[]>(`${this.baseUrl}/Announcement_GetTypes`).subscribe({
      next: (data) => { this.announcementsCategory = data; },
      error: (err) => { console.log(err); }
    });
  }

  sendAnnouncement(title: string, category: number, createDate: Date, message: string){
    this.http.post(`${this.baseUrl}/Announcement_Add`, {
      Title: title,
      AnnouncementCategory: category,
      CreateDate: createDate,
      Message: message
    }).subscribe();
  }

}
