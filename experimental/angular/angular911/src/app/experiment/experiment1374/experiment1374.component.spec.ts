import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1374Component } from './experiment1374.component';

describe('Experiment1374Component', () => {
  let component: Experiment1374Component;
  let fixture: ComponentFixture<Experiment1374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
