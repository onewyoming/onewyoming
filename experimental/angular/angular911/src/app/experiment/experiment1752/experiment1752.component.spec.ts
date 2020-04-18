import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1752Component } from './experiment1752.component';

describe('Experiment1752Component', () => {
  let component: Experiment1752Component;
  let fixture: ComponentFixture<Experiment1752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
