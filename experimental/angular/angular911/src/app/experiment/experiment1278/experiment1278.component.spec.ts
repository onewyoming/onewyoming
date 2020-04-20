import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1278Component } from './experiment1278.component';

describe('Experiment1278Component', () => {
  let component: Experiment1278Component;
  let fixture: ComponentFixture<Experiment1278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
