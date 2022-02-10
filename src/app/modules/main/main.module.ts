import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DateFnsModule } from 'ngx-date-fns';

import { COMPONENTS } from '../main/constatnts/components';
import { CustomDateModule, MaterialsModule, TranslateUIModule } from '@shared/index';
import { CurrencyProxyPipe } from '../../pipes/index';

@NgModule({
  declarations: [
    ...COMPONENTS,
    CurrencyProxyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    MatIconModule,
    TranslateUIModule,
    CustomDateModule,
    DateFnsModule
  ],
  exports: [ COMPONENTS]
})
export class MainModule { }
