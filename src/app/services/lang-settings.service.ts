import { DOCUMENT, getLocaleCurrencyCode } from '@angular/common';
import { ApplicationRef, Inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from 'date-fns';
import { enIN } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { Subject } from 'rxjs';
import { CURRENCY_LIST, LOCALE_LIST } from '@constants/index'
import { CURRENCY_CODE } from '../enums/index';
import { LocaleModel } from '../Interfaces/index';

@Injectable({
  providedIn: 'root'
})

export class LangSettingsService {

  private selectedLocal:LocaleModel = LOCALE_LIST[0];
  public currencyObj= CURRENCY_LIST[0];
  public selectedCurrency: CURRENCY_CODE = CURRENCY_CODE.INR;
  public $currencySub:Subject<any> = new Subject();
  constructor(
    private translateService:TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private applicationRef: ApplicationRef,
    private config: DateFnsConfigurationService
    ) { }


  getLanguage() :string {
    return this.selectedLocal.code || this.translateService.currentLang || "en";
  }

  getLocale() {
    return this.selectedLocal;
  }

  getDateF() : Locale {
    return this.selectedLocal.date || enIN ;// getLocaleDateFormat(this.getLanguage(), FormatWidth.Short)
  }

  getCurrency(): CURRENCY_CODE | string {
    return this.selectedCurrency || this.selectedLocal.currency || getLocaleCurrencyCode(this.getLanguage()) || CURRENCY_CODE.INR;
  }

  getCurrencyObj() {
    return this.currencyObj;
  }
  
  setLocale(localeItem:LocaleModel) {
    if(!localeItem) return null;
     
    this.selectedLocal = localeItem;
    this.changeLanguage(localeItem.code);
    // this.setCurrency(localeItem.currency || CURRENCY_CODE.INR);
    this.config.setLocale(localeItem.date);
    this.applicationRef.tick();
  }

  setCurrency(cCode:CURRENCY_CODE) {
    this.currencyObj = CURRENCY_LIST.find(e => e.code === cCode);
    this.selectedCurrency = cCode;
    // this.$currencySub.next(cCode);
    this.applicationRef.tick()
  }

  private changeLanguage(langSelect:string) {
    this.translateService.use(langSelect);
    this.translateService.setDefaultLang(langSelect);
    this.document.documentElement.setAttribute('lang', langSelect);
    const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: { lang: langSelect } }).toString()
    // this.location.go(url);
    this.router.navigateByUrl(url, { replaceUrl: true });
  }
}
