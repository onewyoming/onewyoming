import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1297Component } from './experiment1297.component';

describe('Experiment1297Component', () => {
  let component: Experiment1297Component;
  let fixture: ComponentFixture<Experiment1297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
