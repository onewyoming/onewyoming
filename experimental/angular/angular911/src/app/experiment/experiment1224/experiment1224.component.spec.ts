import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1224Component } from './experiment1224.component';

describe('Experiment1224Component', () => {
  let component: Experiment1224Component;
  let fixture: ComponentFixture<Experiment1224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
