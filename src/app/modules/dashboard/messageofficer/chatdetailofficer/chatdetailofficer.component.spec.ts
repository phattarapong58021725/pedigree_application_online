import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdetailofficerComponent } from './chatdetailofficer.component';

describe('ChatdetailofficerComponent', () => {
  let component: ChatdetailofficerComponent;
  let fixture: ComponentFixture<ChatdetailofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatdetailofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdetailofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
