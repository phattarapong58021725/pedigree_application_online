import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssOrderstatusComponent } from './ass-orderstatus.component';

describe('AssOrderstatusComponent', () => {
  let component: AssOrderstatusComponent;
  let fixture: ComponentFixture<AssOrderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssOrderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssOrderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
