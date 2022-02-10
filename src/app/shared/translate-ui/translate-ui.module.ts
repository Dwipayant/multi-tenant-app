import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { LangSettingsService } from 'src/app/services';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { enIN } from 'date-fns/locale';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const dateLangConfig = new DateFnsConfigurationService();
dateLangConfig.setLocale(enIN);

const IM_EX :any= [
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        // defaultLanguage:"en",
        compiler: {
          provide: TranslateCompiler,
          useClass: TranslateMessageFormatCompiler
        }
      }),
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...IM_EX
  ],
  exports: IM_EX,
  providers: [

    { provide: DEFAULT_CURRENCY_CODE,
      deps: [LangSettingsService, TranslateService],//some service handling global settings
      useValue: 'INR' 
    },
   
    { provide: DateFnsConfigurationService, useValue: dateLangConfig },
    { provide: MESSAGE_FORMAT_CONFIG, useValue: { 
      locales: ['en', 'fr', 'hi', 'es', 'pt', 'de'],
      disablePluralKeyChecks: false,
      multi: true
    } }
  ]
})
export class TranslateUIModule { }
