import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1490Component } from './experiment1490.component';

describe('Experiment1490Component', () => {
  let component: Experiment1490Component;
  let fixture: ComponentFixture<Experiment1490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
