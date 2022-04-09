import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-announcements-panel',
  templateUrl: './announcements-panel.component.html',
  styleUrls: ['./announcements-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnouncementsPanelComponent implements OnInit {
  token: string;
  isError: boolean;
  isCopied: boolean;

  faCopy = faCopy;

  constructor(public authorizeService: AuthorizeService) { }

  ngOnInit(): void {
    this.isCopied = false;
    this.authorizeService.getAccessToken().subscribe(
      (t) => {
        this.token = "Bearer " + t;
        this.isError = false;
      },
      (err) => {
        this.isError = true;
      }
    );
  }

}
