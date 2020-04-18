import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1676Component } from './experiment1676.component';

describe('Experiment1676Component', () => {
  let component: Experiment1676Component;
  let fixture: ComponentFixture<Experiment1676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
