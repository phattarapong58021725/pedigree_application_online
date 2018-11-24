import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssOrderrefuseComponent } from './ass-orderrefuse.component';

describe('AssOrderrefuseComponent', () => {
  let component: AssOrderrefuseComponent;
  let fixture: ComponentFixture<AssOrderrefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssOrderrefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssOrderrefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
