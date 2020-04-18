import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1335Component } from './experiment1335.component';

describe('Experiment1335Component', () => {
  let component: Experiment1335Component;
  let fixture: ComponentFixture<Experiment1335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
