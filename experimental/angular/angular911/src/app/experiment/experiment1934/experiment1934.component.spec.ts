import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1934Component } from './experiment1934.component';

describe('Experiment1934Component', () => {
  let component: Experiment1934Component;
  let fixture: ComponentFixture<Experiment1934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
