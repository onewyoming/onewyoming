import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment630Component } from './experiment630.component';

describe('Experiment630Component', () => {
  let component: Experiment630Component;
  let fixture: ComponentFixture<Experiment630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
