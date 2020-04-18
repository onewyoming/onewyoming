import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment626Component } from './experiment626.component';

describe('Experiment626Component', () => {
  let component: Experiment626Component;
  let fixture: ComponentFixture<Experiment626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
