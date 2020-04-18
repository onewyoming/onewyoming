import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1795Component } from './experiment1795.component';

describe('Experiment1795Component', () => {
  let component: Experiment1795Component;
  let fixture: ComponentFixture<Experiment1795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
