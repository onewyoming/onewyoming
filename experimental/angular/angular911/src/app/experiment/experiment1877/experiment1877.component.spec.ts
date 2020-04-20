import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1877Component } from './experiment1877.component';

describe('Experiment1877Component', () => {
  let component: Experiment1877Component;
  let fixture: ComponentFixture<Experiment1877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
