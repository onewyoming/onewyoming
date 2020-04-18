import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1629Component } from './experiment1629.component';

describe('Experiment1629Component', () => {
  let component: Experiment1629Component;
  let fixture: ComponentFixture<Experiment1629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
