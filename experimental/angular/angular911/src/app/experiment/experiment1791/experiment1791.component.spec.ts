import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1791Component } from './experiment1791.component';

describe('Experiment1791Component', () => {
  let component: Experiment1791Component;
  let fixture: ComponentFixture<Experiment1791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
