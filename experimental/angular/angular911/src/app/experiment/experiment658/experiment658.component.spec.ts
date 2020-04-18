import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment658Component } from './experiment658.component';

describe('Experiment658Component', () => {
  let component: Experiment658Component;
  let fixture: ComponentFixture<Experiment658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
