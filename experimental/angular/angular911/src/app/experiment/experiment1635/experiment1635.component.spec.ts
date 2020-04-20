import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1635Component } from './experiment1635.component';

describe('Experiment1635Component', () => {
  let component: Experiment1635Component;
  let fixture: ComponentFixture<Experiment1635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
