import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1715Component } from './experiment1715.component';

describe('Experiment1715Component', () => {
  let component: Experiment1715Component;
  let fixture: ComponentFixture<Experiment1715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
