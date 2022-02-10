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

  price = 858.65;
  count = 2;
  dateNow = new Date();
  gender = "male";
  genderOptions = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    },
    {
      value: "other",
      label: "Other"
    }
  ];

  cObj = { count: this.count }

  constructor(
    public app: AppService,
  ) { }

}
