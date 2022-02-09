import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { DateFnsConfigurationService, DateFnsModule } from 'ngx-date-fns';
import { enIN } from 'date-fns/locale';
import { MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { COMPONENTS } from '../main/constatnts/components';
import { MaterialsModule } from '../index';
import { CustomDateModule } from '../../shared/index';
import { CurrencyProxyPipe } from '../../pipes/index';
import { LangSettingsService } from '../../services/index';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(enIN);

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
    // TranslateUIModule,
    CustomDateModule,
    DateFnsModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE,
      deps: [LangSettingsService, TranslateService],//some service handling global settings
      // useFactory: (langSettingsService:LangSettingsService) => langSettingsService.getCurrencyObj()?.code || "INR"   //returns locale string
      useValue: 'INR' 
    },
    { provide: "CURRENCY_ID",
      deps: [LangSettingsService, TranslateService], //some service handling global settings
      useFactory: (langSettingsService:LangSettingsService) => langSettingsService.selectedCurrency || "INR" //returns locale string
      // useValue: 'INR' 
    },
    { provide: DateFnsConfigurationService, useValue: frenchConfig },
    { provide: MESSAGE_FORMAT_CONFIG, useValue: { 
      locales: ['en', 'fr', 'hi', 'es', 'pt', 'de'],
      disablePluralKeyChecks: false,
      multi: true
    } }
  ],
  exports: [ COMPONENTS]
})
export class MainModule { }
