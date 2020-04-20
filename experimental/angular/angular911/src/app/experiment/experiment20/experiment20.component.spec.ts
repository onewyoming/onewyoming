import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment20Component } from './experiment20.component';

describe('Experiment20Component', () => {
  let component: Experiment20Component;
  let fixture: ComponentFixture<Experiment20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
