import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1620Component } from './experiment1620.component';

describe('Experiment1620Component', () => {
  let component: Experiment1620Component;
  let fixture: ComponentFixture<Experiment1620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
