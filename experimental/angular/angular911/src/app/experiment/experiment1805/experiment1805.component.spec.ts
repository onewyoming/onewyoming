import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1805Component } from './experiment1805.component';

describe('Experiment1805Component', () => {
  let component: Experiment1805Component;
  let fixture: ComponentFixture<Experiment1805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
