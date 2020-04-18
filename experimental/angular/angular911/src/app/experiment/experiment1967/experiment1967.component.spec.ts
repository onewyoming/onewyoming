import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1967Component } from './experiment1967.component';

describe('Experiment1967Component', () => {
  let component: Experiment1967Component;
  let fixture: ComponentFixture<Experiment1967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
