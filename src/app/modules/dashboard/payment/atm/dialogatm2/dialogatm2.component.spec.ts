import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogatm2Component } from './dialogatm2.component';

describe('Dialogatm2Component', () => {
  let component: Dialogatm2Component;
  let fixture: ComponentFixture<Dialogatm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialogatm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogatm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
