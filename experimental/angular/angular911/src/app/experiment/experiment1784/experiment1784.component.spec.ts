import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1784Component } from './experiment1784.component';

describe('Experiment1784Component', () => {
  let component: Experiment1784Component;
  let fixture: ComponentFixture<Experiment1784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
