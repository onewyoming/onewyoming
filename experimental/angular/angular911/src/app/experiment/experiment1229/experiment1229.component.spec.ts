import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1229Component } from './experiment1229.component';

describe('Experiment1229Component', () => {
  let component: Experiment1229Component;
  let fixture: ComponentFixture<Experiment1229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
