import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment64Component } from './experiment64.component';

describe('Experiment64Component', () => {
  let component: Experiment64Component;
  let fixture: ComponentFixture<Experiment64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
