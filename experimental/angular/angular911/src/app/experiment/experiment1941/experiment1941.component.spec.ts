import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1941Component } from './experiment1941.component';

describe('Experiment1941Component', () => {
  let component: Experiment1941Component;
  let fixture: ComponentFixture<Experiment1941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
