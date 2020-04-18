import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1272Component } from './experiment1272.component';

describe('Experiment1272Component', () => {
  let component: Experiment1272Component;
  let fixture: ComponentFixture<Experiment1272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
