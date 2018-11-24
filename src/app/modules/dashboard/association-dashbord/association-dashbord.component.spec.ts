import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDashbordComponent } from './association-dashbord.component';

describe('AssociationDashbordComponent', () => {
  let component: AssociationDashbordComponent;
  let fixture: ComponentFixture<AssociationDashbordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationDashbordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
