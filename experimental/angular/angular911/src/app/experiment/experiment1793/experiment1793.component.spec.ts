import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1793Component } from './experiment1793.component';

describe('Experiment1793Component', () => {
  let component: Experiment1793Component;
  let fixture: ComponentFixture<Experiment1793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
