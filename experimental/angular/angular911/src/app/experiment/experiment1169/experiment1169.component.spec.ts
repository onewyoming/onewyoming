import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1169Component } from './experiment1169.component';

describe('Experiment1169Component', () => {
  let component: Experiment1169Component;
  let fixture: ComponentFixture<Experiment1169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
