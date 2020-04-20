import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1956Component } from './experiment1956.component';

describe('Experiment1956Component', () => {
  let component: Experiment1956Component;
  let fixture: ComponentFixture<Experiment1956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
