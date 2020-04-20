import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment660Component } from './experiment660.component';

describe('Experiment660Component', () => {
  let component: Experiment660Component;
  let fixture: ComponentFixture<Experiment660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
