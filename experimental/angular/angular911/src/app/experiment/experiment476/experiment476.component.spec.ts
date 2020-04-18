import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment476Component } from './experiment476.component';

describe('Experiment476Component', () => {
  let component: Experiment476Component;
  let fixture: ComponentFixture<Experiment476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
