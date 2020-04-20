import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1031Component } from './experiment1031.component';

describe('Experiment1031Component', () => {
  let component: Experiment1031Component;
  let fixture: ComponentFixture<Experiment1031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
