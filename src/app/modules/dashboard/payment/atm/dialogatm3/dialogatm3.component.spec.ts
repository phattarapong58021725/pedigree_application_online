import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogatm3Component } from './dialogatm3.component';

describe('Dialogatm3Component', () => {
  let component: Dialogatm3Component;
  let fixture: ComponentFixture<Dialogatm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialogatm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogatm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
