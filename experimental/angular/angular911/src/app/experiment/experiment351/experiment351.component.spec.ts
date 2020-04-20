import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment351Component } from './experiment351.component';

describe('Experiment351Component', () => {
  let component: Experiment351Component;
  let fixture: ComponentFixture<Experiment351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
