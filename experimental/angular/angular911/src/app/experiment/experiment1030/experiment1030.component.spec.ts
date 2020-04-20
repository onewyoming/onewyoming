import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1030Component } from './experiment1030.component';

describe('Experiment1030Component', () => {
  let component: Experiment1030Component;
  let fixture: ComponentFixture<Experiment1030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
