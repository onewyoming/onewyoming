import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1436Component } from './experiment1436.component';

describe('Experiment1436Component', () => {
  let component: Experiment1436Component;
  let fixture: ComponentFixture<Experiment1436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
