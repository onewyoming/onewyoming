import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1459Component } from './experiment1459.component';

describe('Experiment1459Component', () => {
  let component: Experiment1459Component;
  let fixture: ComponentFixture<Experiment1459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
