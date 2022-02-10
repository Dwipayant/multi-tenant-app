import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/services';

import { HomeService } from '../../home.service';

@Component({
  selector: 'multi-tenant-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {

  initialCounts = 4;
  addMoreCount = 4;
  viewMoreIteration = 0;

  dashboardList =[]
   constructor(
    private homeService: HomeService,
    public app: AppService,
    private router: Router,
  ) { }


  showViewMore(initialCounts: number, iteration: number, addMoreCount: number) {
    const length = Array.isArray(this. dashboardList) ? this. dashboardList.length : 0;
    return length && length > ((initialCounts || 0) + ((iteration * addMoreCount) || 0))
  }

  reidrectTo(details: any) { }

}
