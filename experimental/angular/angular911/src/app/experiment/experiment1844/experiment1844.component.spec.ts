import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1844Component } from './experiment1844.component';

describe('Experiment1844Component', () => {
  let component: Experiment1844Component;
  let fixture: ComponentFixture<Experiment1844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
