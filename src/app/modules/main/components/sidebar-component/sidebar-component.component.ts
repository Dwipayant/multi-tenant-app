import { Component, AfterViewInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppService, DynamicThemeService } from '@services/index';

import { ROUTE } from '../../interfaces/index';

@Component({
  selector: 'multi-tenant-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent {
  item!: { title: '', route: '' };
  menuLists: ROUTE[] = [
    {
      icon: '',
      route: 'home',
      title: 'Home',
      condition: ()=> {return true }
    },
    {
      icon: '',
      route: 'login',
      title: 'Login',
      condition: ()=> {return !this.app.isLoggedIn() }
    },
    {
      icon: '',
      route: 'create-form',
      title: 'Create Form',
      condition: ()=> {return true }
    },
    {
      icon: '',
      route: 'theme-selection',
      title: 'Theme Selection',
      condition: ()=> {return true }
    },
    {
      icon: '',
      route: 'settings',
      title: 'Settings',
      condition: ()=> {return true }
    },
    {
      icon: '',
      route: null,
      onClick: () => {this.logout()},
      title: 'Logout',
      condition: ()=> {return this.app.isLoggedIn() }
    }
   
  ];
  fontCounter=0;
  toggleControl = this.themeService.currentThemeMode;

  constructor(
    private router: Router,
    private app: AppService,
    private themeService: DynamicThemeService,
    public translateService:TranslateService
  ) {
    this.router = router;
    this.themeController();
    this.translateService.currentLang
  }

  logout() {
    this.app.logout();
    this.router.navigateByUrl('/');
  }

  resizeFont(){
    let fontItems = [
      { key: "--normal-font", size: 16 },
      { key: "--page-heading-font", size: 26 },
      { key: "--section-heading-font", size: 22 },
      { key: "--toolbar-heading-font", size: 24 },
      { key: "--small-font", size: 14 },      
      { key: "--xs-font", size: 12 },      
    ];
    fontItems.forEach(eachFont => {
      document.body.style.setProperty(eachFont.key, (eachFont.size+this.fontCounter)+"px");
    });
  }

  changeFontSize(changeCount:number){
    this.fontCounter = (changeCount == 0) ? changeCount: (this.fontCounter + changeCount);
    this.resizeFont();
  }

  themeController() {
    this.themeService.getThemeModeChangedSubject().subscribe((res: any) => {
      this.toggleControl = res;
    }, (error:any) => { });
  }

  toggleThemeMode() {
    this.themeService.toggleThemeMode();
  }
}