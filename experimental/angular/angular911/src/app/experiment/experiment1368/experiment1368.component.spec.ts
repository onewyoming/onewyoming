import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1368Component } from './experiment1368.component';

describe('Experiment1368Component', () => {
  let component: Experiment1368Component;
  let fixture: ComponentFixture<Experiment1368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
