import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1957Component } from './experiment1957.component';

describe('Experiment1957Component', () => {
  let component: Experiment1957Component;
  let fixture: ComponentFixture<Experiment1957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
