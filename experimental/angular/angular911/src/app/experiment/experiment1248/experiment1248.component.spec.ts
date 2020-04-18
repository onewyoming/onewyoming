import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1248Component } from './experiment1248.component';

describe('Experiment1248Component', () => {
  let component: Experiment1248Component;
  let fixture: ComponentFixture<Experiment1248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
