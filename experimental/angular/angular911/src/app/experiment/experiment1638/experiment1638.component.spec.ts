import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1638Component } from './experiment1638.component';

describe('Experiment1638Component', () => {
  let component: Experiment1638Component;
  let fixture: ComponentFixture<Experiment1638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
