import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePswdComponent } from './change-pswd/change-pswd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule, PostLoginUserMgmtRoutingModule } from '../index';


@NgModule({
  declarations: [
    ChangePswdComponent
  ],
  imports: [
    CommonModule,
    PostLoginUserMgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule
  ]
})
export class PostLoginUserMgmtModule { }
