import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogatm5Component } from './dialogatm5.component';

describe('Dialogatm5Component', () => {
  let component: Dialogatm5Component;
  let fixture: ComponentFixture<Dialogatm5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dialogatm5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dialogatm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
