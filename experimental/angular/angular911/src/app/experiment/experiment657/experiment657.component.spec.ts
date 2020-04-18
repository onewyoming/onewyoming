import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment657Component } from './experiment657.component';

describe('Experiment657Component', () => {
  let component: Experiment657Component;
  let fixture: ComponentFixture<Experiment657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
