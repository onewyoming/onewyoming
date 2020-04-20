import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment67Component } from './experiment67.component';

describe('Experiment67Component', () => {
  let component: Experiment67Component;
  let fixture: ComponentFixture<Experiment67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
