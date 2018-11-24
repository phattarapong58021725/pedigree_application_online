import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogatm1Component } from './dialogatm1.component';

describe('Dialogatm1Component', () => {
  let component: Dialogatm1Component;
  let fixture: ComponentFixture<Dialogatm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialogatm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogatm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
