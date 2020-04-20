import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1131Component } from './experiment1131.component';

describe('Experiment1131Component', () => {
  let component: Experiment1131Component;
  let fixture: ComponentFixture<Experiment1131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
