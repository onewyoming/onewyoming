import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1607Component } from './experiment1607.component';

describe('Experiment1607Component', () => {
  let component: Experiment1607Component;
  let fixture: ComponentFixture<Experiment1607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
