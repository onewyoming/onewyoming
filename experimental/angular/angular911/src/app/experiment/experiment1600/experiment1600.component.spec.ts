import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1600Component } from './experiment1600.component';

describe('Experiment1600Component', () => {
  let component: Experiment1600Component;
  let fixture: ComponentFixture<Experiment1600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
