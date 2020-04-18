import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment386Component } from './experiment386.component';

describe('Experiment386Component', () => {
  let component: Experiment386Component;
  let fixture: ComponentFixture<Experiment386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
