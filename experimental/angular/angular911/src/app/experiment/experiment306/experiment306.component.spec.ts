import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment306Component } from './experiment306.component';

describe('Experiment306Component', () => {
  let component: Experiment306Component;
  let fixture: ComponentFixture<Experiment306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
