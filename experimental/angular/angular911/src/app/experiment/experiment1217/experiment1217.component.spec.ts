import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1217Component } from './experiment1217.component';

describe('Experiment1217Component', () => {
  let component: Experiment1217Component;
  let fixture: ComponentFixture<Experiment1217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
