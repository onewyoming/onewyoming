import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1408Component } from './experiment1408.component';

describe('Experiment1408Component', () => {
  let component: Experiment1408Component;
  let fixture: ComponentFixture<Experiment1408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
