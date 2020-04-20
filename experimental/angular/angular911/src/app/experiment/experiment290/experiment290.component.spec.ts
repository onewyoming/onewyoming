import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment290Component } from './experiment290.component';

describe('Experiment290Component', () => {
  let component: Experiment290Component;
  let fixture: ComponentFixture<Experiment290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
