import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1105Component } from './experiment1105.component';

describe('Experiment1105Component', () => {
  let component: Experiment1105Component;
  let fixture: ComponentFixture<Experiment1105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
