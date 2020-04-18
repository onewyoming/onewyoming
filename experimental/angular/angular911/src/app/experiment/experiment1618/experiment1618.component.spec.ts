import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1618Component } from './experiment1618.component';

describe('Experiment1618Component', () => {
  let component: Experiment1618Component;
  let fixture: ComponentFixture<Experiment1618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
