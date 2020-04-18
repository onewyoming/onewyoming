import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1579Component } from './experiment1579.component';

describe('Experiment1579Component', () => {
  let component: Experiment1579Component;
  let fixture: ComponentFixture<Experiment1579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
