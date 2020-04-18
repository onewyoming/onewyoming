import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1247Component } from './experiment1247.component';

describe('Experiment1247Component', () => {
  let component: Experiment1247Component;
  let fixture: ComponentFixture<Experiment1247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
