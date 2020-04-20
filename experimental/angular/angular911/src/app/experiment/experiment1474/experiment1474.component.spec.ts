import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1474Component } from './experiment1474.component';

describe('Experiment1474Component', () => {
  let component: Experiment1474Component;
  let fixture: ComponentFixture<Experiment1474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
