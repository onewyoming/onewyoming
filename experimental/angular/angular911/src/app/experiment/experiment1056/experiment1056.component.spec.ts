import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1056Component } from './experiment1056.component';

describe('Experiment1056Component', () => {
  let component: Experiment1056Component;
  let fixture: ComponentFixture<Experiment1056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
