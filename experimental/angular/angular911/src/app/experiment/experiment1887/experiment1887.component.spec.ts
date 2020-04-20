import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1887Component } from './experiment1887.component';

describe('Experiment1887Component', () => {
  let component: Experiment1887Component;
  let fixture: ComponentFixture<Experiment1887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
