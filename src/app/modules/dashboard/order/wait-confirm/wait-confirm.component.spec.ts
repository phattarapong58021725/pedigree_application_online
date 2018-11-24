import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitConfirmComponent } from './wait-confirm.component';

describe('WaitConfirmComponent', () => {
  let component: WaitConfirmComponent;
  let fixture: ComponentFixture<WaitConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
