import { ApplicationRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { CURRENCY_LIST, LOCALE_LIST } from '@constants/index';
import { LangSettingsService } from '@services/index';

@Component({
  selector: 'esspl-currency-lang',
  templateUrl: './currency-lang.component.html',
  styleUrls: ['./currency-lang.component.scss']
})
export class CurrencyLangComponent {

  langList = LOCALE_LIST;
  currencies = CURRENCY_LIST;

  selectedC;
  selectedL;

  money = 456.78;
  constructor(
    public translateService:TranslateService,
    public langService: LangSettingsService,
    private applicationRef: ApplicationRef,
    ) {
      this.selectedC = this.langService.getCurrency();
      this.selectedL = this.langService.getLocale().id;
     }

  changeCurrency(selectedCurrency) {
    this.langService.setCurrency(selectedCurrency);
  }

  
  changeLanguage(selectedlang) {
    const locale = this.langList.find(e => e.id == selectedlang);
    if(locale) {
      this.langService.setLocale(locale);
    }
  }
}
