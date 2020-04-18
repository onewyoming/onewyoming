import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1765Component } from './experiment1765.component';

describe('Experiment1765Component', () => {
  let component: Experiment1765Component;
  let fixture: ComponentFixture<Experiment1765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
