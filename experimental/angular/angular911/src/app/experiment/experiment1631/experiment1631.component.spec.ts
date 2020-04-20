import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1631Component } from './experiment1631.component';

describe('Experiment1631Component', () => {
  let component: Experiment1631Component;
  let fixture: ComponentFixture<Experiment1631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
