import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1569Component } from './experiment1569.component';

describe('Experiment1569Component', () => {
  let component: Experiment1569Component;
  let fixture: ComponentFixture<Experiment1569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
