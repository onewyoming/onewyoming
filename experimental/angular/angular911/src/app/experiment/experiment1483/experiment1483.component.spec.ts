import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1483Component } from './experiment1483.component';

describe('Experiment1483Component', () => {
  let component: Experiment1483Component;
  let fixture: ComponentFixture<Experiment1483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
