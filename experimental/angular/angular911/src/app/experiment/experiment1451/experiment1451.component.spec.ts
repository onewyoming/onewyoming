import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1451Component } from './experiment1451.component';

describe('Experiment1451Component', () => {
  let component: Experiment1451Component;
  let fixture: ComponentFixture<Experiment1451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
