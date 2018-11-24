import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashondeliComponent } from './cashondeli.component';

describe('CashondeliComponent', () => {
  let component: CashondeliComponent;
  let fixture: ComponentFixture<CashondeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashondeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashondeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
