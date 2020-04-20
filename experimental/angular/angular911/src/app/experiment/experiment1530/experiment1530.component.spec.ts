import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1530Component } from './experiment1530.component';

describe('Experiment1530Component', () => {
  let component: Experiment1530Component;
  let fixture: ComponentFixture<Experiment1530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
