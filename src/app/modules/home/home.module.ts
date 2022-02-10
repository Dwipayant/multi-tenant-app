import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* external modules */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/* internal modules */
import { HomeRoutingModule } from './home-routing.module';
import { DynFormModule, MaterialsModule, TranslateUIModule } from '@shared/index';

/* components */
import { HomeViewComponent } from './components/home-view/home-view.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { DialogSuccessComponent } from './components/dialog-success/dialog-success.component';
import { CoreModule } from '@shared/core/core.module';

@NgModule({
  declarations: [
    HomeViewComponent, 
    CreateFormComponent, 
    DialogSuccessComponent,
  ]
    ,
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatFormFieldModule,
    MatInputModule,
    
    DynFormModule,
    MaterialsModule,
    TranslateUIModule,
    CoreModule
  ]
})
export class HomeModule { }
