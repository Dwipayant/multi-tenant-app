import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { MaterialsModule, DashboardRoutingModule } from '../index';


@NgModule({
  declarations: [
    DashboardViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialsModule
  ]
})
export class DashboardModule { }
