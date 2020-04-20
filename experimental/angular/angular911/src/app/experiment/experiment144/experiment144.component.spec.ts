import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment144Component } from './experiment144.component';

describe('Experiment144Component', () => {
  let component: Experiment144Component;
  let fixture: ComponentFixture<Experiment144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
