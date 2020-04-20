import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment711Component } from './experiment711.component';

describe('Experiment711Component', () => {
  let component: Experiment711Component;
  let fixture: ComponentFixture<Experiment711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
