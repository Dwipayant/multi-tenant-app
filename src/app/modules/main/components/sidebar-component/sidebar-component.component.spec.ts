import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarComponentComponent } from './sidebar-component.component';

describe('SidebarComponentComponent', () => {
  let component: SidebarComponentComponent;
  let fixture: ComponentFixture<SidebarComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});