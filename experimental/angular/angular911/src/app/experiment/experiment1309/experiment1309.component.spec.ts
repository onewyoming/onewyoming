import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1309Component } from './experiment1309.component';

describe('Experiment1309Component', () => {
  let component: Experiment1309Component;
  let fixture: ComponentFixture<Experiment1309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
