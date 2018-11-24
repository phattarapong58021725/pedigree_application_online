import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrder3Component } from './add-order3.component';

describe('AddOrder3Component', () => {
  let component: AddOrder3Component;
  let fixture: ComponentFixture<AddOrder3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrder3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrder3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
