import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1175Component } from './experiment1175.component';

describe('Experiment1175Component', () => {
  let component: Experiment1175Component;
  let fixture: ComponentFixture<Experiment1175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
