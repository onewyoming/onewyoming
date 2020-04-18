import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment387Component } from './experiment387.component';

describe('Experiment387Component', () => {
  let component: Experiment387Component;
  let fixture: ComponentFixture<Experiment387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
