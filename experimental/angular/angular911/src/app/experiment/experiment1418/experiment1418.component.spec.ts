import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1418Component } from './experiment1418.component';

describe('Experiment1418Component', () => {
  let component: Experiment1418Component;
  let fixture: ComponentFixture<Experiment1418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
