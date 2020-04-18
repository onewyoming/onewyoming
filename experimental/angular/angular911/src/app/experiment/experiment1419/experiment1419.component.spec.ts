import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1419Component } from './experiment1419.component';

describe('Experiment1419Component', () => {
  let component: Experiment1419Component;
  let fixture: ComponentFixture<Experiment1419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
