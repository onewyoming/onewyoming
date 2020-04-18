import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1694Component } from './experiment1694.component';

describe('Experiment1694Component', () => {
  let component: Experiment1694Component;
  let fixture: ComponentFixture<Experiment1694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
