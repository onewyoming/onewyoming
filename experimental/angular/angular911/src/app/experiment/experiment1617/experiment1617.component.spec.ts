import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1617Component } from './experiment1617.component';

describe('Experiment1617Component', () => {
  let component: Experiment1617Component;
  let fixture: ComponentFixture<Experiment1617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
