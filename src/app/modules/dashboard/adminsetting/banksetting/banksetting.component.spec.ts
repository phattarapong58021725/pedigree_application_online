import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksettingComponent } from './banksetting.component';

describe('BanksettingComponent', () => {
  let component: BanksettingComponent;
  let fixture: ComponentFixture<BanksettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
