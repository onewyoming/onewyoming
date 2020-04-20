import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1345Component } from './experiment1345.component';

describe('Experiment1345Component', () => {
  let component: Experiment1345Component;
  let fixture: ComponentFixture<Experiment1345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
