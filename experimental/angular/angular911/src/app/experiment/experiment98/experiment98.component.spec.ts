import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment98Component } from './experiment98.component';

describe('Experiment98Component', () => {
  let component: Experiment98Component;
  let fixture: ComponentFixture<Experiment98Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment98Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
