import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment524Component } from './experiment524.component';

describe('Experiment524Component', () => {
  let component: Experiment524Component;
  let fixture: ComponentFixture<Experiment524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
