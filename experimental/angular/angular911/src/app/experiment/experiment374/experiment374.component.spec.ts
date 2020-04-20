import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment374Component } from './experiment374.component';

describe('Experiment374Component', () => {
  let component: Experiment374Component;
  let fixture: ComponentFixture<Experiment374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
