import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1625Component } from './experiment1625.component';

describe('Experiment1625Component', () => {
  let component: Experiment1625Component;
  let fixture: ComponentFixture<Experiment1625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
