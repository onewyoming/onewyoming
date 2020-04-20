import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment559Component } from './experiment559.component';

describe('Experiment559Component', () => {
  let component: Experiment559Component;
  let fixture: ComponentFixture<Experiment559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
