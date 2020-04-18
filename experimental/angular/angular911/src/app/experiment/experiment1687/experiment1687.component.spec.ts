import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1687Component } from './experiment1687.component';

describe('Experiment1687Component', () => {
  let component: Experiment1687Component;
  let fixture: ComponentFixture<Experiment1687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
