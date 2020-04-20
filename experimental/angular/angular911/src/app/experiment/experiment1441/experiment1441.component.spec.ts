import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1441Component } from './experiment1441.component';

describe('Experiment1441Component', () => {
  let component: Experiment1441Component;
  let fixture: ComponentFixture<Experiment1441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
