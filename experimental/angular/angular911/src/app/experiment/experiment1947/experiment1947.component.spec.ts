import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1947Component } from './experiment1947.component';

describe('Experiment1947Component', () => {
  let component: Experiment1947Component;
  let fixture: ComponentFixture<Experiment1947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
