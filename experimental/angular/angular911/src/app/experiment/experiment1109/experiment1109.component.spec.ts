import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1109Component } from './experiment1109.component';

describe('Experiment1109Component', () => {
  let component: Experiment1109Component;
  let fixture: ComponentFixture<Experiment1109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
