import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment150Component } from './experiment150.component';

describe('Experiment150Component', () => {
  let component: Experiment150Component;
  let fixture: ComponentFixture<Experiment150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
