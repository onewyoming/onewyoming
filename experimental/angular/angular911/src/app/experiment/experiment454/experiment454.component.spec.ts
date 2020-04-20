import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment454Component } from './experiment454.component';

describe('Experiment454Component', () => {
  let component: Experiment454Component;
  let fixture: ComponentFixture<Experiment454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
