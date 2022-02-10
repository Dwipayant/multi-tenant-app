import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TenantService } from '@app/tenant/tenant.service';

import { AppService } from './app.service';
import { StorageService } from './storage.service';

describe('AppService', () => {
  let service: AppService;
  let clientDataMock = {
    tenantId: "asdas",
    clientAuth: "kkkk"
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [StorageService, TenantService]
    });
    service = TestBed.inject(AppService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
  });

  describe('login', () => {
    it('should login', () => {
      spyOn(service, "login").and.callThrough();
      service.login(clientDataMock);
      localStorage.setItem('tenantId', clientDataMock.tenantId);
      localStorage.setItem('clientAuth', clientDataMock.clientAuth);
      expect(localStorage.getItem('tenantId')).toEqual(clientDataMock.tenantId);
      expect(localStorage.getItem('clientAuth')).toEqual(clientDataMock.clientAuth);
    });
  });

  describe('logout', () => {
    it('should logout', () => {
      spyOn(service, "logout").and.callThrough();
      service.logout();
      localStorage.clear();
      expect(localStorage.getItem('tenantId')).toEqual(null);
      expect(localStorage.getItem('clientAuth')).toEqual(null);
    });
  });
});
