import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditFromComponent } from './user-edit-from.component';

describe('UserEditFromComponent', () => {
  let component: UserEditFromComponent;
  let fixture: ComponentFixture<UserEditFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
