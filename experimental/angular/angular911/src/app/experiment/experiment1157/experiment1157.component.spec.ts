import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1157Component } from './experiment1157.component';

describe('Experiment1157Component', () => {
  let component: Experiment1157Component;
  let fixture: ComponentFixture<Experiment1157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
