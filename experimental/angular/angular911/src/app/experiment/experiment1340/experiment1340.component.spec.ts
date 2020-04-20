import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1340Component } from './experiment1340.component';

describe('Experiment1340Component', () => {
  let component: Experiment1340Component;
  let fixture: ComponentFixture<Experiment1340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
