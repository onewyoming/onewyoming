import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1069Component } from './experiment1069.component';

describe('Experiment1069Component', () => {
  let component: Experiment1069Component;
  let fixture: ComponentFixture<Experiment1069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
