import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1338Component } from './experiment1338.component';

describe('Experiment1338Component', () => {
  let component: Experiment1338Component;
  let fixture: ComponentFixture<Experiment1338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
