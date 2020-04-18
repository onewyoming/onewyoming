import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1988Component } from './experiment1988.component';

describe('Experiment1988Component', () => {
  let component: Experiment1988Component;
  let fixture: ComponentFixture<Experiment1988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
