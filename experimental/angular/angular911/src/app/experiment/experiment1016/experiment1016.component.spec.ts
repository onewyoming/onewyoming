import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1016Component } from './experiment1016.component';

describe('Experiment1016Component', () => {
  let component: Experiment1016Component;
  let fixture: ComponentFixture<Experiment1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
