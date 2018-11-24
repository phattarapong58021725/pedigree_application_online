import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsettingComponent } from './adminsetting.component';

describe('AdminsettingComponent', () => {
  let component: AdminsettingComponent;
  let fixture: ComponentFixture<AdminsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
