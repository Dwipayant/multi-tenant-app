import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { UppercaseDirective } from './directives/uppercase.directive';
import { MaterialsModule } from '../index';
import { DynFormComponent } from './dyn-form/dyn-form.component';


const COMPONENTS = [
  DynFormComponent,
]

const DIRECTIVES = [
  UppercaseDirective
]
@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MaterialsModule
  ],
  exports: [...COMPONENTS]
})
export class DynFormModule { }
