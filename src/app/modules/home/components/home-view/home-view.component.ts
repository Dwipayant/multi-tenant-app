import { HttpClient } from '@angular/common/http';
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
  tableData = [
    {
      userName: "bbsr@esspl.com",
      password: "bbsr",
      "tenantId": "odisha-esspl-2",
    },
    {
      userName: "cuttack@esspl.com",
      password: "cuttack",
      "tenantId": "odisha-esspl-2"
    },
    {
      userName: "puri@esspl.com",
      password: "puri",
      "tenantId": "odisha-esspl-2"
    },
    {
      userName: "hyderabad@esspl.com",
      password: "hyderabad",
      "tenantId": "ts-esspl"
    },
    {
      userName: "amarabati@esspl.com",
      password: "amarabati",
      "tenantId": "ts-esspl"
    },
    {
      userName: "vizag@esspl.com",
      password: "vizag",
      "tenantId": "ap-esspl"
    },
    {
      userName: "srikakulam@esspl.com",
      password: "srikalulam",
      "tenantId": "ap-esspl"
    },
    {
      userName: "kolkata@esspl.com",
      password: "kolkata",
      "tenantId": "bengal-esspl"
    },
    {
      userName: "jamshedpur@esspl.com",
      password: "jamshedpur",
      "tenantId": "bihar-esspl"
    },
];

tableHeaders = [
  {
    key: "userName",
    label: "User Name"
  },
  {
    key: "password",
    label: "Password"
  },
  {
    key: "tenantId",
    label: "Tenant ID"
  }
];

tenantData;
  constructor(
    public app: AppService,
    public http:HttpClient
  ) {

    this.http.get('assets/data/tenant.json').subscribe(res => {
      this.tenantData = res;
    })
   }


}
