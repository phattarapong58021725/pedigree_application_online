import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputaddressmemberComponent } from './inputaddressmember.component';

describe('InputaddressmemberComponent', () => {
  let component: InputaddressmemberComponent;
  let fixture: ComponentFixture<InputaddressmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputaddressmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputaddressmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
