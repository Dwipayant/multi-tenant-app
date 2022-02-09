import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/index';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {

  constructor(public app:AppService) { }

}
