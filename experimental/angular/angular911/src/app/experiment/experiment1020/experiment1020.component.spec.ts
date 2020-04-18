import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1020Component } from './experiment1020.component';

describe('Experiment1020Component', () => {
  let component: Experiment1020Component;
  let fixture: ComponentFixture<Experiment1020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
