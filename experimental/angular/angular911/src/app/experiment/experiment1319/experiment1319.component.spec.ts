import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1319Component } from './experiment1319.component';

describe('Experiment1319Component', () => {
  let component: Experiment1319Component;
  let fixture: ComponentFixture<Experiment1319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
