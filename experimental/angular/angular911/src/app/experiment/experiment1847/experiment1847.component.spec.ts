import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1847Component } from './experiment1847.component';

describe('Experiment1847Component', () => {
  let component: Experiment1847Component;
  let fixture: ComponentFixture<Experiment1847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
