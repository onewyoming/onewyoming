import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1429Component } from './experiment1429.component';

describe('Experiment1429Component', () => {
  let component: Experiment1429Component;
  let fixture: ComponentFixture<Experiment1429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
