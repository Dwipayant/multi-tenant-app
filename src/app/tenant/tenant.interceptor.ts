import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantService } from './tenant.service';

@Injectable({
  providedIn: 'root'
})
export class TenantInterceptor implements HttpInterceptor {

  constructor(private ts:TenantService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      this.ts.addTenantToHeaders(request.headers);
    return next.handle(request);
  }
}
