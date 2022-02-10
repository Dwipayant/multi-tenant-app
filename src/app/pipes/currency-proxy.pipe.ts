import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangSettingsService } from '../services/index';


@Pipe({
  name: 'currencyProxy',
  pure: false
})
export class CurrencyProxyPipe implements PipeTransform {

  constructor(private trans: TranslateService, 
    private LangService: LangSettingsService) {}
  currencyPipe = new CurrencyPipe('en')
 
  transform(value,code = null ,display = 'symbol',digites = '0.3-5',local ='en') {
    if(!local) local = this.trans.currentLang;
    if(!code) code = this.LangService.selectedCurrency || "INR";
     return this.currencyPipe.transform(value,code,display,digites,local)
  }
  
}