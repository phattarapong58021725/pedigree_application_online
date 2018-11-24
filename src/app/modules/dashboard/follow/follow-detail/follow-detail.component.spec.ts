import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowDetailComponent } from './follow-detail.component';

describe('FollowDetailComponent', () => {
  let component: FollowDetailComponent;
  let fixture: ComponentFixture<FollowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
