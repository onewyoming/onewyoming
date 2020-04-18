import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment659Component } from './experiment659.component';

describe('Experiment659Component', () => {
  let component: Experiment659Component;
  let fixture: ComponentFixture<Experiment659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
