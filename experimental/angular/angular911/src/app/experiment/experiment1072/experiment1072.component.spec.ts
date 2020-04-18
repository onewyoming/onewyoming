import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1072Component } from './experiment1072.component';

describe('Experiment1072Component', () => {
  let component: Experiment1072Component;
  let fixture: ComponentFixture<Experiment1072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
