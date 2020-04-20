import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1471Component } from './experiment1471.component';

describe('Experiment1471Component', () => {
  let component: Experiment1471Component;
  let fixture: ComponentFixture<Experiment1471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
