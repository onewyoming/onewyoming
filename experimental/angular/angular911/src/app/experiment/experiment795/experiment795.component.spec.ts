import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment795Component } from './experiment795.component';

describe('Experiment795Component', () => {
  let component: Experiment795Component;
  let fixture: ComponentFixture<Experiment795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
