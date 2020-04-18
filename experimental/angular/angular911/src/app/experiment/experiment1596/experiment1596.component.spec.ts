import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1596Component } from './experiment1596.component';

describe('Experiment1596Component', () => {
  let component: Experiment1596Component;
  let fixture: ComponentFixture<Experiment1596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
