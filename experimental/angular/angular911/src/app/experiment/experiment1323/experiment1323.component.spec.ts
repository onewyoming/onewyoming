import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1323Component } from './experiment1323.component';

describe('Experiment1323Component', () => {
  let component: Experiment1323Component;
  let fixture: ComponentFixture<Experiment1323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
