import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageofficerComponent } from './messageofficer.component';

describe('MessageofficerComponent', () => {
  let component: MessageofficerComponent;
  let fixture: ComponentFixture<MessageofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
