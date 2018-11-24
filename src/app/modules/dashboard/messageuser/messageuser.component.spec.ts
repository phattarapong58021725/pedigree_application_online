import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageuserComponent } from './messageuser.component';

describe('MessageuserComponent', () => {
  let component: MessageuserComponent;
  let fixture: ComponentFixture<MessageuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
