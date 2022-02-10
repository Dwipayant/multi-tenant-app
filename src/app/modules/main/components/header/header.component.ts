import { DOCUMENT } from '@angular/common';
import { EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppService } from 'src/app/services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  lastURLSegment!: string;
  userColor: any = [];
  activeLoginURL = false;
  activeRegisterURL = false;
  isLoggedIn = false;

  constructor(public app: AppService,
    public translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(LOCALE_ID) public locale,
    @Inject(DOCUMENT) private document: Document
    // @Inject(REQUEST) private request: Request,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.app.isLoggedIn();
  }

  logout() {
    this.app.logout();
  }

  toggleEvent(event) {
    this.toggleSidenav.emit();
  }

}
