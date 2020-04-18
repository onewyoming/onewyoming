import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1203Component } from './experiment1203.component';

describe('Experiment1203Component', () => {
  let component: Experiment1203Component;
  let fixture: ComponentFixture<Experiment1203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
