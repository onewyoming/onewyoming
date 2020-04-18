import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1541Component } from './experiment1541.component';

describe('Experiment1541Component', () => {
  let component: Experiment1541Component;
  let fixture: ComponentFixture<Experiment1541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
