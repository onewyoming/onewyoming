import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment103Component } from './experiment103.component';

describe('Experiment103Component', () => {
  let component: Experiment103Component;
  let fixture: ComponentFixture<Experiment103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
