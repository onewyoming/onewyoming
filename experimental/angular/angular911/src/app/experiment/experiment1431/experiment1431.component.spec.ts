import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1431Component } from './experiment1431.component';

describe('Experiment1431Component', () => {
  let component: Experiment1431Component;
  let fixture: ComponentFixture<Experiment1431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
