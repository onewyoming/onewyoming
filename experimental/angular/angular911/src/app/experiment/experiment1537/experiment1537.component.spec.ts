import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1537Component } from './experiment1537.component';

describe('Experiment1537Component', () => {
  let component: Experiment1537Component;
  let fixture: ComponentFixture<Experiment1537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
