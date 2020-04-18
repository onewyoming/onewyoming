import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1835Component } from './experiment1835.component';

describe('Experiment1835Component', () => {
  let component: Experiment1835Component;
  let fixture: ComponentFixture<Experiment1835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
