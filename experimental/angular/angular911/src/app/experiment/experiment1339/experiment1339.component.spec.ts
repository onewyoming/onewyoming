import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1339Component } from './experiment1339.component';

describe('Experiment1339Component', () => {
  let component: Experiment1339Component;
  let fixture: ComponentFixture<Experiment1339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
