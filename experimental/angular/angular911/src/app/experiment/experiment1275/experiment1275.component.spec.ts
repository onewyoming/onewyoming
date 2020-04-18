import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1275Component } from './experiment1275.component';

describe('Experiment1275Component', () => {
  let component: Experiment1275Component;
  let fixture: ComponentFixture<Experiment1275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
