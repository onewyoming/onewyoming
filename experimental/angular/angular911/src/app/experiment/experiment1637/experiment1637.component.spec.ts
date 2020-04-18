import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1637Component } from './experiment1637.component';

describe('Experiment1637Component', () => {
  let component: Experiment1637Component;
  let fixture: ComponentFixture<Experiment1637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
