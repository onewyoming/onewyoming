import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1658Component } from './experiment1658.component';

describe('Experiment1658Component', () => {
  let component: Experiment1658Component;
  let fixture: ComponentFixture<Experiment1658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
