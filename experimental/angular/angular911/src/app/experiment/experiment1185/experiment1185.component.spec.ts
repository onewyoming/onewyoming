import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1185Component } from './experiment1185.component';

describe('Experiment1185Component', () => {
  let component: Experiment1185Component;
  let fixture: ComponentFixture<Experiment1185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
