import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment126Component } from './experiment126.component';

describe('Experiment126Component', () => {
  let component: Experiment126Component;
  let fixture: ComponentFixture<Experiment126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
