import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilebankingComponent } from './mobilebanking.component';

describe('MobilebankingComponent', () => {
  let component: MobilebankingComponent;
  let fixture: ComponentFixture<MobilebankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilebankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilebankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
