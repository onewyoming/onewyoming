import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment44Component } from './experiment44.component';

describe('Experiment44Component', () => {
  let component: Experiment44Component;
  let fixture: ComponentFixture<Experiment44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
