import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1697Component } from './experiment1697.component';

describe('Experiment1697Component', () => {
  let component: Experiment1697Component;
  let fixture: ComponentFixture<Experiment1697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
