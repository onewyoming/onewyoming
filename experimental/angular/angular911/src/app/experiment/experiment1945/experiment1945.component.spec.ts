import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1945Component } from './experiment1945.component';

describe('Experiment1945Component', () => {
  let component: Experiment1945Component;
  let fixture: ComponentFixture<Experiment1945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
