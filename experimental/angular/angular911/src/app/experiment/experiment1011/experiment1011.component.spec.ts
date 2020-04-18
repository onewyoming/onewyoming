import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1011Component } from './experiment1011.component';

describe('Experiment1011Component', () => {
  let component: Experiment1011Component;
  let fixture: ComponentFixture<Experiment1011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
