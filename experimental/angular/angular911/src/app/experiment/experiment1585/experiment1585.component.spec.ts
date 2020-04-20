import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1585Component } from './experiment1585.component';

describe('Experiment1585Component', () => {
  let component: Experiment1585Component;
  let fixture: ComponentFixture<Experiment1585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
