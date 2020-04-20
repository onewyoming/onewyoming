import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1995Component } from './experiment1995.component';

describe('Experiment1995Component', () => {
  let component: Experiment1995Component;
  let fixture: ComponentFixture<Experiment1995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
