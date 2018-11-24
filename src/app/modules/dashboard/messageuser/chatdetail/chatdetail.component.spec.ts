import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdetailComponent } from './chatdetail.component';

describe('ChatdetailComponent', () => {
  let component: ChatdetailComponent;
  let fixture: ComponentFixture<ChatdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
