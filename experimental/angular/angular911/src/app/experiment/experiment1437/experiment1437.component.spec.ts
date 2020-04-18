import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1437Component } from './experiment1437.component';

describe('Experiment1437Component', () => {
  let component: Experiment1437Component;
  let fixture: ComponentFixture<Experiment1437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
