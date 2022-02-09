import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TenantService } from '../tenant/tenant.service';

import { AuthGuard } from './auth.guard';

fdescribe('AuthGuard', () => {
  let guard: AuthGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/cookies' };
  let routerMock = { navigate: jasmine.createSpy('navigate') }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [AuthGuard,TenantService],
    });
    guard = TestBed.inject(AuthGuard);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
