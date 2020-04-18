import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1833Component } from './experiment1833.component';

describe('Experiment1833Component', () => {
  let component: Experiment1833Component;
  let fixture: ComponentFixture<Experiment1833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
