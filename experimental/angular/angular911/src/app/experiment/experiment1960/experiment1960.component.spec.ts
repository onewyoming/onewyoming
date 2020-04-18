import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1960Component } from './experiment1960.component';

describe('Experiment1960Component', () => {
  let component: Experiment1960Component;
  let fixture: ComponentFixture<Experiment1960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
