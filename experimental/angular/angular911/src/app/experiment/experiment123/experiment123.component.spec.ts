import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment123Component } from './experiment123.component';

describe('Experiment123Component', () => {
  let component: Experiment123Component;
  let fixture: ComponentFixture<Experiment123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
