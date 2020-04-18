import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1567Component } from './experiment1567.component';

describe('Experiment1567Component', () => {
  let component: Experiment1567Component;
  let fixture: ComponentFixture<Experiment1567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
