import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1814Component } from './experiment1814.component';

describe('Experiment1814Component', () => {
  let component: Experiment1814Component;
  let fixture: ComponentFixture<Experiment1814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
