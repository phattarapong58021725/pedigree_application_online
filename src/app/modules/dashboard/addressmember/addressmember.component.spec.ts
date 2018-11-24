import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressmemberComponent } from './addressmember.component';

describe('AddressmemberComponent', () => {
  let component: AddressmemberComponent;
  let fixture: ComponentFixture<AddressmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
