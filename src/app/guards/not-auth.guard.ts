import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GlobalConst } from '@app/global.constant';
import { Observable } from 'rxjs';
import { AppService } from '../services/index';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate, CanActivateChild {
  constructor(private app: AppService, private router:Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLoggedIn = this.app.isLoggedIn();
        if(isLoggedIn) this.router.navigateByUrl(GlobalConst.DefaultRouteAuth);
        return !isLoggedIn;
    }
  
    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLoggedIn = this.app.isLoggedIn();
        if(isLoggedIn) this.router.navigate([GlobalConst.DefaultRouteAuth]);
        return !isLoggedIn;
    }
  
}
