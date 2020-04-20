import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment293Component } from './experiment293.component';

describe('Experiment293Component', () => {
  let component: Experiment293Component;
  let fixture: ComponentFixture<Experiment293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
