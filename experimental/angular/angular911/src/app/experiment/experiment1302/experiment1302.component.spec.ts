import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1302Component } from './experiment1302.component';

describe('Experiment1302Component', () => {
  let component: Experiment1302Component;
  let fixture: ComponentFixture<Experiment1302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
