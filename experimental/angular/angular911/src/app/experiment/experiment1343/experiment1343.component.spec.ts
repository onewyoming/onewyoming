import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1343Component } from './experiment1343.component';

describe('Experiment1343Component', () => {
  let component: Experiment1343Component;
  let fixture: ComponentFixture<Experiment1343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
