import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1505Component } from './experiment1505.component';

describe('Experiment1505Component', () => {
  let component: Experiment1505Component;
  let fixture: ComponentFixture<Experiment1505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
