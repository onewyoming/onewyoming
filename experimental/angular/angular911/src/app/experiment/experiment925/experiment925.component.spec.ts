import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment925Component } from './experiment925.component';

describe('Experiment925Component', () => {
  let component: Experiment925Component;
  let fixture: ComponentFixture<Experiment925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
