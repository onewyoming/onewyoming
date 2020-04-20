import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1478Component } from './experiment1478.component';

describe('Experiment1478Component', () => {
  let component: Experiment1478Component;
  let fixture: ComponentFixture<Experiment1478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
