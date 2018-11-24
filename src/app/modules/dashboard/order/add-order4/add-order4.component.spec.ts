import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrder4Component } from './add-order4.component';

describe('AddOrder4Component', () => {
  let component: AddOrder4Component;
  let fixture: ComponentFixture<AddOrder4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrder4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrder4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
