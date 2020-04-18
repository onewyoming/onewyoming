import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1647Component } from './experiment1647.component';

describe('Experiment1647Component', () => {
  let component: Experiment1647Component;
  let fixture: ComponentFixture<Experiment1647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
