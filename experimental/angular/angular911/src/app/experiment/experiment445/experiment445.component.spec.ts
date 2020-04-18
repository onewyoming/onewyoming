import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment445Component } from './experiment445.component';

describe('Experiment445Component', () => {
  let component: Experiment445Component;
  let fixture: ComponentFixture<Experiment445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
