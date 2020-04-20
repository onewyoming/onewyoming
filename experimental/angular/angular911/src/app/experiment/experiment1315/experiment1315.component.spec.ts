import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1315Component } from './experiment1315.component';

describe('Experiment1315Component', () => {
  let component: Experiment1315Component;
  let fixture: ComponentFixture<Experiment1315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
