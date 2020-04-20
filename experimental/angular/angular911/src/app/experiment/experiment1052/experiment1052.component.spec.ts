import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1052Component } from './experiment1052.component';

describe('Experiment1052Component', () => {
  let component: Experiment1052Component;
  let fixture: ComponentFixture<Experiment1052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
