import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* internal modules */
import { DynFormModule, MaterialsModule } from '@shared/index';

/* components */
import { LoginComponent } from './components/login/login.component';
import { UserManagementRoutingModule } from '../index';
import { ChangePswdComponent } from './components/change-pswd/change-pswd.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePswdComponent
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
