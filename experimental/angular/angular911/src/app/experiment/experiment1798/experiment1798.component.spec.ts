import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1798Component } from './experiment1798.component';

describe('Experiment1798Component', () => {
  let component: Experiment1798Component;
  let fixture: ComponentFixture<Experiment1798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
