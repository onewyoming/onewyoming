import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1313Component } from './experiment1313.component';

describe('Experiment1313Component', () => {
  let component: Experiment1313Component;
  let fixture: ComponentFixture<Experiment1313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
