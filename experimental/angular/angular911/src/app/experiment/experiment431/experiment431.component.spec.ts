import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment431Component } from './experiment431.component';

describe('Experiment431Component', () => {
  let component: Experiment431Component;
  let fixture: ComponentFixture<Experiment431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
