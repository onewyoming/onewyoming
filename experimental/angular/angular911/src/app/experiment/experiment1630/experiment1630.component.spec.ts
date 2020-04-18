import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1630Component } from './experiment1630.component';

describe('Experiment1630Component', () => {
  let component: Experiment1630Component;
  let fixture: ComponentFixture<Experiment1630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
