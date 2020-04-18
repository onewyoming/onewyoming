import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1438Component } from './experiment1438.component';

describe('Experiment1438Component', () => {
  let component: Experiment1438Component;
  let fixture: ComponentFixture<Experiment1438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
