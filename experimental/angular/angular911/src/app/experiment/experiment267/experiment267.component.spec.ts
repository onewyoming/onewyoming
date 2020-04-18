import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment267Component } from './experiment267.component';

describe('Experiment267Component', () => {
  let component: Experiment267Component;
  let fixture: ComponentFixture<Experiment267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
