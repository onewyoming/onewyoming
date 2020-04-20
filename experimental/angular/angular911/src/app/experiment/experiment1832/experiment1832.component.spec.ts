import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1832Component } from './experiment1832.component';

describe('Experiment1832Component', () => {
  let component: Experiment1832Component;
  let fixture: ComponentFixture<Experiment1832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
