import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1500Component } from './experiment1500.component';

describe('Experiment1500Component', () => {
  let component: Experiment1500Component;
  let fixture: ComponentFixture<Experiment1500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
