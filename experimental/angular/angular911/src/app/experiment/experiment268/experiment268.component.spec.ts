import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment268Component } from './experiment268.component';

describe('Experiment268Component', () => {
  let component: Experiment268Component;
  let fixture: ComponentFixture<Experiment268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
