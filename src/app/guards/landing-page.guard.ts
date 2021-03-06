import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GlobalConst } from '@app/global.constant';
import { Observable } from 'rxjs';
import { AppService } from '../services/index';

@Injectable({
  providedIn: 'root'
})
export class LandingPageGuard implements CanActivate {
  constructor(
    private router: Router,
    private app: AppService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.app.isLoggedIn()) {
        this.router.navigate([GlobalConst.DefaultRouteAuth]);
        return false;
      }
      this.router.navigate(['login'])
      return false;
  }

  
}
