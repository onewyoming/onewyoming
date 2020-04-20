import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1955Component } from './experiment1955.component';

describe('Experiment1955Component', () => {
  let component: Experiment1955Component;
  let fixture: ComponentFixture<Experiment1955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
