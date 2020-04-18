import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1498Component } from './experiment1498.component';

describe('Experiment1498Component', () => {
  let component: Experiment1498Component;
  let fixture: ComponentFixture<Experiment1498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
