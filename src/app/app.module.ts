import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main/main.module';
import { UserManagementModule } from './modules/user-management/user-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './modules/index';
import { CustomDateModule, TranslateUIModule } from '@shared/index';

/* services */
import { TranslateService } from '@ngx-translate/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { LangSettingsService } from '../app/services/index';

import { enIN } from 'date-fns/locale';

const dateLangConfig = new DateFnsConfigurationService();
dateLangConfig.setLocale(enIN);

@NgModule({
  declarations: [
    AppComponent,
    // CurrencyProxyPipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,


    MainModule,
    UserManagementModule,
    HomeModule,
    
    TranslateUIModule,
    CustomDateModule
  ],
  providers: [
    Location,
    {
      provide: LOCALE_ID,
      deps: [LangSettingsService, TranslateService], //some service handling global settings
      useFactory: (langSettingsService) => langSettingsService.getLanguage() //returns locale string
    },
    { 
      provide: DateFnsConfigurationService, 
      useValue: dateLangConfig
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
