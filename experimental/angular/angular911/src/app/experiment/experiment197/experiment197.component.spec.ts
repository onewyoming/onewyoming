import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment197Component } from './experiment197.component';

describe('Experiment197Component', () => {
  let component: Experiment197Component;
  let fixture: ComponentFixture<Experiment197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
