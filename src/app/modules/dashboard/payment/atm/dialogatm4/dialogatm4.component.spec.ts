import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogatm4Component } from './dialogatm4.component';

describe('Dialogatm4Component', () => {
  let component: Dialogatm4Component;
  let fixture: ComponentFixture<Dialogatm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialogatm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogatm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
