import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1503Component } from './experiment1503.component';

describe('Experiment1503Component', () => {
  let component: Experiment1503Component;
  let fixture: ComponentFixture<Experiment1503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
