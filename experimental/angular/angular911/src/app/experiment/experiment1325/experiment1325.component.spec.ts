import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1325Component } from './experiment1325.component';

describe('Experiment1325Component', () => {
  let component: Experiment1325Component;
  let fixture: ComponentFixture<Experiment1325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
