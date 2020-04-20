import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1926Component } from './experiment1926.component';

describe('Experiment1926Component', () => {
  let component: Experiment1926Component;
  let fixture: ComponentFixture<Experiment1926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
