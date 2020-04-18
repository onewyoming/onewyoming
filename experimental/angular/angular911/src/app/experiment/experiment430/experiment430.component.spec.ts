import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment430Component } from './experiment430.component';

describe('Experiment430Component', () => {
  let component: Experiment430Component;
  let fixture: ComponentFixture<Experiment430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
