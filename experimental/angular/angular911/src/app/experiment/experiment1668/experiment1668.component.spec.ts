import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1668Component } from './experiment1668.component';

describe('Experiment1668Component', () => {
  let component: Experiment1668Component;
  let fixture: ComponentFixture<Experiment1668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
