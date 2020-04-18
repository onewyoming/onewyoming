import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment787Component } from './experiment787.component';

describe('Experiment787Component', () => {
  let component: Experiment787Component;
  let fixture: ComponentFixture<Experiment787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
