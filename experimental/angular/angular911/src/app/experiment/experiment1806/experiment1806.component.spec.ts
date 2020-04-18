import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1806Component } from './experiment1806.component';

describe('Experiment1806Component', () => {
  let component: Experiment1806Component;
  let fixture: ComponentFixture<Experiment1806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
