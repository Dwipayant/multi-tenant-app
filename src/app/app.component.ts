import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { LangSettingsService, AppService, DynamicThemeService } from '@services/index';
import { ThemeModel } from '@interfaces/index';
import { GlobalConst } from './global.constant';
import { LOCALE_LIST } from '@constants/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-tenant';

  constructor(
    public translate: TranslateService,
    public appService: AppService, 
    private dynamicTheme: DynamicThemeService,
    private activatedRoute: ActivatedRoute,
    private langService: LangSettingsService,
    private router:Router) {

    this.getSelectedTheme();
    
    this.initializeLang();

    this.getLangFromURLAndApply();
    
    this.fetchThemeOnDemand();    
  }

  initializeLang() {
    this.translate.addLangs(GlobalConst.LANGUAGES);
  }

  getSelectedTheme() {
    this.appService.getSelectedTheme().subscribe((res: any) => {
      if(this.appService.tenantId) {
        const themes = res[this.appService.tenantId];
        let activeTheme = themes ? themes[0] : null;
        if (activeTheme) {
          activeTheme["id"] = activeTheme.id | activeTheme._id;
          const defaultThemeName = (activeTheme.primary && activeTheme.accent) ? "dynamic-theme" : "default-theme";
          activeTheme["theme"] = activeTheme.theme || activeTheme.themeName || defaultThemeName;
          this.dynamicTheme.setAvailabeThemes(<ThemeModel[]>[activeTheme]);
        }
       
        this.dynamicTheme.setTheme(activeTheme);
      }
    })
  }

  /* 
  *@desc: On logging in need to fetch users theme, and on loggingout set back to default theme  
  */
  fetchThemeOnDemand() {
    this.appService.themeData$.subscribe((res:boolean) => {
      if(res){
        /* res === true : user has loggedin fetchuser theme and apply */
        this.getSelectedTheme() 
      } else {
        /* res === false : user has loggedout. Remove user's themes and apply default theme*/
        this.dynamicTheme.setAvailabeThemes([]);
        this.dynamicTheme.setTheme();
      } 
    });
  }

  getLangFromURLAndApply() {
    this.activatedRoute.queryParamMap.subscribe(param => {
      let lang = param.get("lang") || "";
      lang = lang.match(GlobalConst.REG_EXP.languages) ? lang : null
      if (lang && this.translate.getDefaultLang() !== lang) {
        this.translate.use(lang);
        this.translate.setDefaultLang(lang);
        const locale = LOCALE_LIST.find(e => e.id == lang)
        this.langService.setLocale(locale)
      } else if(lang == null && this.translate.getDefaultLang()) {
        const url = this.router.createUrlTree([], { relativeTo: this.activatedRoute, queryParams: { lang: this.translate.getDefaultLang() } }).toString()
        // this.location.go(url);
        this.router.navigateByUrl(url, { replaceUrl: true });
      } else if(lang == null){
        this.translate.use('en'); 
      }
    });

  }
}
