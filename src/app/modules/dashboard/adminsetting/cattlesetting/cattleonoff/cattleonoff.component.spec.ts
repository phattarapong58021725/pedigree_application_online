import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleonoffComponent } from './cattleonoff.component';

describe('CattleonoffComponent', () => {
  let component: CattleonoffComponent;
  let fixture: ComponentFixture<CattleonoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattleonoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleonoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
