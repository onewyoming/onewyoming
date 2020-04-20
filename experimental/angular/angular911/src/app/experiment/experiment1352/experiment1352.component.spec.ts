import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1352Component } from './experiment1352.component';

describe('Experiment1352Component', () => {
  let component: Experiment1352Component;
  let fixture: ComponentFixture<Experiment1352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
