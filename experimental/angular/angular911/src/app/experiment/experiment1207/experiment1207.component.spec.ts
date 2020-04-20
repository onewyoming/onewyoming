import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1207Component } from './experiment1207.component';

describe('Experiment1207Component', () => {
  let component: Experiment1207Component;
  let fixture: ComponentFixture<Experiment1207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
