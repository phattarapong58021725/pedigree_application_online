import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrder1Component } from './add-order1.component';

describe('AddOrder1Component', () => {
  let component: AddOrder1Component;
  let fixture: ComponentFixture<AddOrder1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrder1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
