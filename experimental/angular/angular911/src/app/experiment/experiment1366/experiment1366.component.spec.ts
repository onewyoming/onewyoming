import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1366Component } from './experiment1366.component';

describe('Experiment1366Component', () => {
  let component: Experiment1366Component;
  let fixture: ComponentFixture<Experiment1366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
