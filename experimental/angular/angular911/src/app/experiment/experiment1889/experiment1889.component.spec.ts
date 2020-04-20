import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1889Component } from './experiment1889.component';

describe('Experiment1889Component', () => {
  let component: Experiment1889Component;
  let fixture: ComponentFixture<Experiment1889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
