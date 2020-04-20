import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1485Component } from './experiment1485.component';

describe('Experiment1485Component', () => {
  let component: Experiment1485Component;
  let fixture: ComponentFixture<Experiment1485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
