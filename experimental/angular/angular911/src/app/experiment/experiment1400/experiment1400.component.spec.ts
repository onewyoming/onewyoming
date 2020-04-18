import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1400Component } from './experiment1400.component';

describe('Experiment1400Component', () => {
  let component: Experiment1400Component;
  let fixture: ComponentFixture<Experiment1400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
