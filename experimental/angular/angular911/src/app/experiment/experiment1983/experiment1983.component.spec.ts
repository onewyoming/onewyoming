import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1983Component } from './experiment1983.component';

describe('Experiment1983Component', () => {
  let component: Experiment1983Component;
  let fixture: ComponentFixture<Experiment1983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
