import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment269Component } from './experiment269.component';

describe('Experiment269Component', () => {
  let component: Experiment269Component;
  let fixture: ComponentFixture<Experiment269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
