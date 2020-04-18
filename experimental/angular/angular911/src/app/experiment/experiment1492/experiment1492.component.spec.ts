import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1492Component } from './experiment1492.component';

describe('Experiment1492Component', () => {
  let component: Experiment1492Component;
  let fixture: ComponentFixture<Experiment1492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
