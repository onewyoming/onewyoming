import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1863Component } from './experiment1863.component';

describe('Experiment1863Component', () => {
  let component: Experiment1863Component;
  let fixture: ComponentFixture<Experiment1863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
