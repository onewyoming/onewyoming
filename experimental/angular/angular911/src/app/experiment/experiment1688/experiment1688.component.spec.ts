import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1688Component } from './experiment1688.component';

describe('Experiment1688Component', () => {
  let component: Experiment1688Component;
  let fixture: ComponentFixture<Experiment1688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
