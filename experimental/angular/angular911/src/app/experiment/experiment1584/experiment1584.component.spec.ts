import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1584Component } from './experiment1584.component';

describe('Experiment1584Component', () => {
  let component: Experiment1584Component;
  let fixture: ComponentFixture<Experiment1584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
