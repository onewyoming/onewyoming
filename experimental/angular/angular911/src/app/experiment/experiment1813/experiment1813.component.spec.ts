import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1813Component } from './experiment1813.component';

describe('Experiment1813Component', () => {
  let component: Experiment1813Component;
  let fixture: ComponentFixture<Experiment1813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
