import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1515Component } from './experiment1515.component';

describe('Experiment1515Component', () => {
  let component: Experiment1515Component;
  let fixture: ComponentFixture<Experiment1515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
