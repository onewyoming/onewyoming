import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment638Component } from './experiment638.component';

describe('Experiment638Component', () => {
  let component: Experiment638Component;
  let fixture: ComponentFixture<Experiment638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
