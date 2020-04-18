import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1513Component } from './experiment1513.component';

describe('Experiment1513Component', () => {
  let component: Experiment1513Component;
  let fixture: ComponentFixture<Experiment1513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
