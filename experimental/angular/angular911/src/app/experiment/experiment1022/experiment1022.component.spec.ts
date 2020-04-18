import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1022Component } from './experiment1022.component';

describe('Experiment1022Component', () => {
  let component: Experiment1022Component;
  let fixture: ComponentFixture<Experiment1022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
