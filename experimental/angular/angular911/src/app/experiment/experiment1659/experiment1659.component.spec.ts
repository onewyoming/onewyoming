import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1659Component } from './experiment1659.component';

describe('Experiment1659Component', () => {
  let component: Experiment1659Component;
  let fixture: ComponentFixture<Experiment1659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
