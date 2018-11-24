import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattlesettingComponent } from './cattlesetting.component';

describe('CattlesettingComponent', () => {
  let component: CattlesettingComponent;
  let fixture: ComponentFixture<CattlesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattlesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattlesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
