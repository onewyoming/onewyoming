import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1604Component } from './experiment1604.component';

describe('Experiment1604Component', () => {
  let component: Experiment1604Component;
  let fixture: ComponentFixture<Experiment1604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
