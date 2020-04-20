import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1417Component } from './experiment1417.component';

describe('Experiment1417Component', () => {
  let component: Experiment1417Component;
  let fixture: ComponentFixture<Experiment1417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
