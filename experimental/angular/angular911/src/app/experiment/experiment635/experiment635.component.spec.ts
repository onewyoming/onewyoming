import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment635Component } from './experiment635.component';

describe('Experiment635Component', () => {
  let component: Experiment635Component;
  let fixture: ComponentFixture<Experiment635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
