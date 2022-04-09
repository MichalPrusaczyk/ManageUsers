import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
import { AnnouncementCategory } from 'src/announcements/models/announcement-model';
import { AnnouncementService } from 'src/announcements/services/announcements.service';

let Alert: any;

@Component({
  selector: 'app-panel-add',
  templateUrl: './panel-add.component.html',
  styleUrls: ['./panel-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelAddComponent implements OnInit {
  
  announcementCategries!: Observable<AnnouncementCategory[]>;
  constructor(
    private announcementService: AnnouncementService
  ) { }

  @ViewChild("announcementCategory") announcementCategory: ElementRef;
  @ViewChild("announcementTitle") announcementTitle: ElementRef;
  @ViewChild("announcementMessage") announcementMessage: any;

  ngOnInit(): void {
    this.announcementService.getDataForDashboard();
  }

  getAnnouncementsCategory(){
    this.announcementCategries = this.announcementService.getAnnouncementsCategory();
  }

  sendAnnouncement(){
    let announcementTitle: string = this.announcementTitle.nativeElement?.value;
    let announcementCategory: number = this.announcementCategory.nativeElement?.value;
    let announcementCreateDate: Date = new Date();
    let announcementMessage: string = this.announcementMessage?.textArea?.nativeElement?.innerHTML;

    if(
      this.isNullOrEmpty(announcementTitle) ||
      this.isNullOrEmpty(announcementCategory) ||
      this.isNullOrEmpty(announcementMessage)
    ){
      this.announcementService.sendAnnouncement(announcementTitle, announcementCategory, announcementCreateDate, announcementMessage);
    }
    else {
      new Alert().Show('error', 'Please fill all fields');
    }
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: '100%',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      // {
      //   name: 'test',
      //   class: 'test',
      // }
    ],
    toolbarHiddenButtons: [
      [
        'backgroundColor',
        'toggleEditorMode',
        'link',
        'unlink',
        'insertVideo',
      ]
    ]
  };

  private isNullOrEmpty(e: any){
    if(typeof e != 'undefined' && e){
      return e;
    }
  }
}
