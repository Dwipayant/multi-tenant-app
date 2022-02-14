import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '@services/index';
import { DynFormComponent } from '@shared/dyn-form/dyn-form/dyn-form.component';
import { FormControlModel } from '@shared/index';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(DynFormComponent) dynForm: DynFormComponent;
  userName!: string;
  password!: string;

  credentials = [
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
  ]

  tenantData : {"tenantId":string, "loginForm":FormControlModel[]}[];
  formConfig;
  extraForm;

  loginForm:FormGroup;
  constructor(
    public app: AppService, 
    private fb:FormBuilder, 
    private http:HttpClient,
    private router: Router
  ) {
    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
      })
    }

    this.http.get('assets/data/tenant.json').subscribe(res => {
      this.tenantData = res as any;
      this.extraForm = this.tenantData.find(e => e.tenantId === ("dummy" ||this.app.tenantId));
      // if(!(this.extraForm && this.extraForm.loginForm)) this.extraForm = this.tenantData[this.tenantData.length - 1]; 
      this.formConfig = this.extraForm?.loginForm;
    })
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      "userName": ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]      
    })
  }

  login(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const fValue = this.loginForm.value;
    const user =  this.credentials.find(e => { return e.password === fValue.password && e.userName === fValue.userName });
    if (user && this.loginForm.valid && (this.dynForm ? this.dynForm?.baseFG?.valid : true)) {
      this.app.login({ id: user.userName, ...user });
    this.router.navigate(['home']);
    }
  }

}
