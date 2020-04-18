import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment968Component } from './experiment968.component';

describe('Experiment968Component', () => {
  let component: Experiment968Component;
  let fixture: ComponentFixture<Experiment968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
