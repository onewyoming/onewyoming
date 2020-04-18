import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1463Component } from './experiment1463.component';

describe('Experiment1463Component', () => {
  let component: Experiment1463Component;
  let fixture: ComponentFixture<Experiment1463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
