import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1279Component } from './experiment1279.component';

describe('Experiment1279Component', () => {
  let component: Experiment1279Component;
  let fixture: ComponentFixture<Experiment1279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
