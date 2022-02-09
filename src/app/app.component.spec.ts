import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { delay, of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService, DynamicThemeService } from './services';

describe('AppComponent', () => {
  const languagesMockData = ['en', 'fr', 'pt', 'es', 'de', 'hi'];
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useClass: TranslateFakeLoader
            }
        }),
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [TranslateService, AppService, DynamicThemeService]
    }).compileComponents();
  });
  
  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize languages',() => {
   spyOn(component, "initializeLang").and.callThrough();
   expect(component.initializeLang).toHaveBeenCalledTimes(0);
  })
});
