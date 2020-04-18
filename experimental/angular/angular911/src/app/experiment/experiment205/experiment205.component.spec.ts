import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment205Component } from './experiment205.component';

describe('Experiment205Component', () => {
  let component: Experiment205Component;
  let fixture: ComponentFixture<Experiment205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
