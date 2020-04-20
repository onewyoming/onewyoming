import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1077Component } from './experiment1077.component';

describe('Experiment1077Component', () => {
  let component: Experiment1077Component;
  let fixture: ComponentFixture<Experiment1077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
