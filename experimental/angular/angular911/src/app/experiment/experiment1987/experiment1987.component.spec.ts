import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1987Component } from './experiment1987.component';

describe('Experiment1987Component', () => {
  let component: Experiment1987Component;
  let fixture: ComponentFixture<Experiment1987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
