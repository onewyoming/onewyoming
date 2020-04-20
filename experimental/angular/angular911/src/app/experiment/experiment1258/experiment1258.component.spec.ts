import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1258Component } from './experiment1258.component';

describe('Experiment1258Component', () => {
  let component: Experiment1258Component;
  let fixture: ComponentFixture<Experiment1258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
