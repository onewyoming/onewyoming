import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1774Component } from './experiment1774.component';

describe('Experiment1774Component', () => {
  let component: Experiment1774Component;
  let fixture: ComponentFixture<Experiment1774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
