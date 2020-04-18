import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1084Component } from './experiment1084.component';

describe('Experiment1084Component', () => {
  let component: Experiment1084Component;
  let fixture: ComponentFixture<Experiment1084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
