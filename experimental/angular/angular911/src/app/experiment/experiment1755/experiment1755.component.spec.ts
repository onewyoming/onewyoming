import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1755Component } from './experiment1755.component';

describe('Experiment1755Component', () => {
  let component: Experiment1755Component;
  let fixture: ComponentFixture<Experiment1755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
