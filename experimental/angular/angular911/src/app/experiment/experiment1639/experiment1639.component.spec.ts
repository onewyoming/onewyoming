import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1639Component } from './experiment1639.component';

describe('Experiment1639Component', () => {
  let component: Experiment1639Component;
  let fixture: ComponentFixture<Experiment1639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
