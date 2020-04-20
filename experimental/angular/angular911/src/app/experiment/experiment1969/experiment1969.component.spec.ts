import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1969Component } from './experiment1969.component';

describe('Experiment1969Component', () => {
  let component: Experiment1969Component;
  let fixture: ComponentFixture<Experiment1969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
