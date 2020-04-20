import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1399Component } from './experiment1399.component';

describe('Experiment1399Component', () => {
  let component: Experiment1399Component;
  let fixture: ComponentFixture<Experiment1399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
