import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyProxyPipe, CustomDatePipe } from '@app/pipes';
import { TableComponent } from './components/table/table.component';
import { MaterialsModule } from '..';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
  declarations: [
    CustomDatePipe,
    CurrencyProxyPipe,
    TableComponent,
    CardViewComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomDatePipe,
    CurrencyProxyPipe,
    TableComponent,
    CardViewComponent
  ]
})
export class CoreModule { }
