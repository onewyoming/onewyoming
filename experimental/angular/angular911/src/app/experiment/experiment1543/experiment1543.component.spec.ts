import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1543Component } from './experiment1543.component';

describe('Experiment1543Component', () => {
  let component: Experiment1543Component;
  let fixture: ComponentFixture<Experiment1543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
