import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1356Component } from './experiment1356.component';

describe('Experiment1356Component', () => {
  let component: Experiment1356Component;
  let fixture: ComponentFixture<Experiment1356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
