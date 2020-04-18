import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment86Component } from './experiment86.component';

describe('Experiment86Component', () => {
  let component: Experiment86Component;
  let fixture: ComponentFixture<Experiment86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
