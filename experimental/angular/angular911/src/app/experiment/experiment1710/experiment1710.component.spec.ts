import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1710Component } from './experiment1710.component';

describe('Experiment1710Component', () => {
  let component: Experiment1710Component;
  let fixture: ComponentFixture<Experiment1710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
