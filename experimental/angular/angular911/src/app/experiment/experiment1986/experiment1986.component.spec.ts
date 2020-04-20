import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1986Component } from './experiment1986.component';

describe('Experiment1986Component', () => {
  let component: Experiment1986Component;
  let fixture: ComponentFixture<Experiment1986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
