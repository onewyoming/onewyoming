import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment560Component } from './experiment560.component';

describe('Experiment560Component', () => {
  let component: Experiment560Component;
  let fixture: ComponentFixture<Experiment560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
