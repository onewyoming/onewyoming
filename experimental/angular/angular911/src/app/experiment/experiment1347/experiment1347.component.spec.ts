import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1347Component } from './experiment1347.component';

describe('Experiment1347Component', () => {
  let component: Experiment1347Component;
  let fixture: ComponentFixture<Experiment1347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
