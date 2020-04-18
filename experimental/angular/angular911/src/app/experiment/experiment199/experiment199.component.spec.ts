import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment199Component } from './experiment199.component';

describe('Experiment199Component', () => {
  let component: Experiment199Component;
  let fixture: ComponentFixture<Experiment199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
