import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1057Component } from './experiment1057.component';

describe('Experiment1057Component', () => {
  let component: Experiment1057Component;
  let fixture: ComponentFixture<Experiment1057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
