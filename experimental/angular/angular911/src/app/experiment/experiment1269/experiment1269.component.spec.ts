import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1269Component } from './experiment1269.component';

describe('Experiment1269Component', () => {
  let component: Experiment1269Component;
  let fixture: ComponentFixture<Experiment1269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
