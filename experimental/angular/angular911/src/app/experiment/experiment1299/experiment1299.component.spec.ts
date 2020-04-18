import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1299Component } from './experiment1299.component';

describe('Experiment1299Component', () => {
  let component: Experiment1299Component;
  let fixture: ComponentFixture<Experiment1299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
