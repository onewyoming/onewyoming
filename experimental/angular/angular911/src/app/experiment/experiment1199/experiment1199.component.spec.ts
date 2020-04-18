import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1199Component } from './experiment1199.component';

describe('Experiment1199Component', () => {
  let component: Experiment1199Component;
  let fixture: ComponentFixture<Experiment1199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
