import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1670Component } from './experiment1670.component';

describe('Experiment1670Component', () => {
  let component: Experiment1670Component;
  let fixture: ComponentFixture<Experiment1670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
