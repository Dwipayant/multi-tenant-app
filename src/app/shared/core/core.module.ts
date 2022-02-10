import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyProxyPipe, CustomDatePipe } from '@app/pipes';

@NgModule({
  declarations: [
    CustomDatePipe,
    CurrencyProxyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomDatePipe,
    CurrencyProxyPipe
  ]
})
export class CoreModule { }
