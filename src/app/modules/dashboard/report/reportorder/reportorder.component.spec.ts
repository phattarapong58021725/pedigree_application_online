import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportorderComponent } from './reportorder.component';

describe('ReportorderComponent', () => {
  let component: ReportorderComponent;
  let fixture: ComponentFixture<ReportorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
