import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1312Component } from './experiment1312.component';

describe('Experiment1312Component', () => {
  let component: Experiment1312Component;
  let fixture: ComponentFixture<Experiment1312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
