import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment530Component } from './experiment530.component';

describe('Experiment530Component', () => {
  let component: Experiment530Component;
  let fixture: ComponentFixture<Experiment530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
