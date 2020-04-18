import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment888Component } from './experiment888.component';

describe('Experiment888Component', () => {
  let component: Experiment888Component;
  let fixture: ComponentFixture<Experiment888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
