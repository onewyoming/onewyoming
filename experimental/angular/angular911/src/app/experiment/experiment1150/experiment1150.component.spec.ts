import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1150Component } from './experiment1150.component';

describe('Experiment1150Component', () => {
  let component: Experiment1150Component;
  let fixture: ComponentFixture<Experiment1150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
