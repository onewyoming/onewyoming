import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1008Component } from './experiment1008.component';

describe('Experiment1008Component', () => {
  let component: Experiment1008Component;
  let fixture: ComponentFixture<Experiment1008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
