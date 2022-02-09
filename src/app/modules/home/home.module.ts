import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { MaterialsModule, DynFormModule } from '../index';
import { CreateFormComponent } from './create-form/create-form.component';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';

@NgModule({
  declarations: [HomeViewComponent, CreateFormComponent, DialogSuccessComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    DynFormModule,
  ]
})
export class HomeModule { }
