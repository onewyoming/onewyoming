import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment919Component } from './experiment919.component';

describe('Experiment919Component', () => {
  let component: Experiment919Component;
  let fixture: ComponentFixture<Experiment919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
