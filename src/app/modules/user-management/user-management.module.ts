import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule, DynFormModule, UserManagementRoutingModule } from '../index';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    DynFormModule
  ]
})
export class UserManagementModule { }
