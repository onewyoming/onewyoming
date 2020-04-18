import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment607Component } from './experiment607.component';

describe('Experiment607Component', () => {
  let component: Experiment607Component;
  let fixture: ComponentFixture<Experiment607Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment607Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
