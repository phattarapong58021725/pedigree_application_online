import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationReportComponent } from './association-report.component';

describe('AssociationReportComponent', () => {
  let component: AssociationReportComponent;
  let fixture: ComponentFixture<AssociationReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
