import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment56Component } from './experiment56.component';

describe('Experiment56Component', () => {
  let component: Experiment56Component;
  let fixture: ComponentFixture<Experiment56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
