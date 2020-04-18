import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1497Component } from './experiment1497.component';

describe('Experiment1497Component', () => {
  let component: Experiment1497Component;
  let fixture: ComponentFixture<Experiment1497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
