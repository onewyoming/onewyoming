import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1672Component } from './experiment1672.component';

describe('Experiment1672Component', () => {
  let component: Experiment1672Component;
  let fixture: ComponentFixture<Experiment1672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
