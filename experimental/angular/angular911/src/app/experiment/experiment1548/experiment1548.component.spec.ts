import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1548Component } from './experiment1548.component';

describe('Experiment1548Component', () => {
  let component: Experiment1548Component;
  let fixture: ComponentFixture<Experiment1548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
