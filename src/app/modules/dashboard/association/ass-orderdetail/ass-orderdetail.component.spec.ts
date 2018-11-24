import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssOrderdetailComponent } from './ass-orderdetail.component';

describe('AssOrderdetailComponent', () => {
  let component: AssOrderdetailComponent;
  let fixture: ComponentFixture<AssOrderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssOrderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssOrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
