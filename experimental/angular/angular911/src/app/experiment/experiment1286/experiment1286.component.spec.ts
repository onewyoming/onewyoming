import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1286Component } from './experiment1286.component';

describe('Experiment1286Component', () => {
  let component: Experiment1286Component;
  let fixture: ComponentFixture<Experiment1286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
