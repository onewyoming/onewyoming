import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1027Component } from './experiment1027.component';

describe('Experiment1027Component', () => {
  let component: Experiment1027Component;
  let fixture: ComponentFixture<Experiment1027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
