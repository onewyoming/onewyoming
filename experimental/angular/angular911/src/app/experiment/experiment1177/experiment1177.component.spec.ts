import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1177Component } from './experiment1177.component';

describe('Experiment1177Component', () => {
  let component: Experiment1177Component;
  let fixture: ComponentFixture<Experiment1177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
