import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1445Component } from './experiment1445.component';

describe('Experiment1445Component', () => {
  let component: Experiment1445Component;
  let fixture: ComponentFixture<Experiment1445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
