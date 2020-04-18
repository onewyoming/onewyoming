import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1764Component } from './experiment1764.component';

describe('Experiment1764Component', () => {
  let component: Experiment1764Component;
  let fixture: ComponentFixture<Experiment1764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
