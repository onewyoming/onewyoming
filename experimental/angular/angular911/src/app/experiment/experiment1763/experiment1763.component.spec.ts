import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1763Component } from './experiment1763.component';

describe('Experiment1763Component', () => {
  let component: Experiment1763Component;
  let fixture: ComponentFixture<Experiment1763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
