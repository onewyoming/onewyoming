import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1704Component } from './experiment1704.component';

describe('Experiment1704Component', () => {
  let component: Experiment1704Component;
  let fixture: ComponentFixture<Experiment1704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
