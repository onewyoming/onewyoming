import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1440Component } from './experiment1440.component';

describe('Experiment1440Component', () => {
  let component: Experiment1440Component;
  let fixture: ComponentFixture<Experiment1440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
