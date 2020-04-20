import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1085Component } from './experiment1085.component';

describe('Experiment1085Component', () => {
  let component: Experiment1085Component;
  let fixture: ComponentFixture<Experiment1085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
