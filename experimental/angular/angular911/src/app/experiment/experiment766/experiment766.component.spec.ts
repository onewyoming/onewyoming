import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment766Component } from './experiment766.component';

describe('Experiment766Component', () => {
  let component: Experiment766Component;
  let fixture: ComponentFixture<Experiment766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
