import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrder2Component } from './add-order2.component';

describe('AddOrder2Component', () => {
  let component: AddOrder2Component;
  let fixture: ComponentFixture<AddOrder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
