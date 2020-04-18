import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1550Component } from './experiment1550.component';

describe('Experiment1550Component', () => {
  let component: Experiment1550Component;
  let fixture: ComponentFixture<Experiment1550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
