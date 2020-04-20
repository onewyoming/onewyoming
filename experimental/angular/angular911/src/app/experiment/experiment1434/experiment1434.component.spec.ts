import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1434Component } from './experiment1434.component';

describe('Experiment1434Component', () => {
  let component: Experiment1434Component;
  let fixture: ComponentFixture<Experiment1434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
