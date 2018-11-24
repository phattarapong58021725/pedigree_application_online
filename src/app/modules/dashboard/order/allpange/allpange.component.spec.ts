import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpangeComponent } from './allpange.component';

describe('AllpangeComponent', () => {
  let component: AllpangeComponent;
  let fixture: ComponentFixture<AllpangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
