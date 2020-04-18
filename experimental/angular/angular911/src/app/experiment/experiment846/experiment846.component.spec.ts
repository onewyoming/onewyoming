import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment846Component } from './experiment846.component';

describe('Experiment846Component', () => {
  let component: Experiment846Component;
  let fixture: ComponentFixture<Experiment846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
