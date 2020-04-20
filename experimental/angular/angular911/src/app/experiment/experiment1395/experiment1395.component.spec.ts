import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1395Component } from './experiment1395.component';

describe('Experiment1395Component', () => {
  let component: Experiment1395Component;
  let fixture: ComponentFixture<Experiment1395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
