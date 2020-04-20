import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment541Component } from './experiment541.component';

describe('Experiment541Component', () => {
  let component: Experiment541Component;
  let fixture: ComponentFixture<Experiment541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
