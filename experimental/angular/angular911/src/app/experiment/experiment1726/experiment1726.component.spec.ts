import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1726Component } from './experiment1726.component';

describe('Experiment1726Component', () => {
  let component: Experiment1726Component;
  let fixture: ComponentFixture<Experiment1726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
