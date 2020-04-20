import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1265Component } from './experiment1265.component';

describe('Experiment1265Component', () => {
  let component: Experiment1265Component;
  let fixture: ComponentFixture<Experiment1265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
