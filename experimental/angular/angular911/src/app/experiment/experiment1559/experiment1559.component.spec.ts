import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1559Component } from './experiment1559.component';

describe('Experiment1559Component', () => {
  let component: Experiment1559Component;
  let fixture: ComponentFixture<Experiment1559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
