import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattlecolorComponent } from './cattlecolor.component';

describe('CattlecolorComponent', () => {
  let component: CattlecolorComponent;
  let fixture: ComponentFixture<CattlecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattlecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattlecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
