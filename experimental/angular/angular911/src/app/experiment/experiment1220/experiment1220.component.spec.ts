import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1220Component } from './experiment1220.component';

describe('Experiment1220Component', () => {
  let component: Experiment1220Component;
  let fixture: ComponentFixture<Experiment1220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
