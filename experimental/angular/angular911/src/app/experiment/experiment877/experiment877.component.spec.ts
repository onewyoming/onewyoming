import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment877Component } from './experiment877.component';

describe('Experiment877Component', () => {
  let component: Experiment877Component;
  let fixture: ComponentFixture<Experiment877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
