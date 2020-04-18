import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1876Component } from './experiment1876.component';

describe('Experiment1876Component', () => {
  let component: Experiment1876Component;
  let fixture: ComponentFixture<Experiment1876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
