import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1588Component } from './experiment1588.component';

describe('Experiment1588Component', () => {
  let component: Experiment1588Component;
  let fixture: ComponentFixture<Experiment1588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
