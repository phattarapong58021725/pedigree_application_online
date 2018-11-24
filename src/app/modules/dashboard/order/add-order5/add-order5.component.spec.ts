import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrder5Component } from './add-order5.component';

describe('AddOrder5Component', () => {
  let component: AddOrder5Component;
  let fixture: ComponentFixture<AddOrder5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrder5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrder5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
