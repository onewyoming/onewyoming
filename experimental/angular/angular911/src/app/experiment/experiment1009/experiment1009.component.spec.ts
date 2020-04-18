import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1009Component } from './experiment1009.component';

describe('Experiment1009Component', () => {
  let component: Experiment1009Component;
  let fixture: ComponentFixture<Experiment1009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
