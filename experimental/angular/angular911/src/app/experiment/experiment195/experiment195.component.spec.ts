import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment195Component } from './experiment195.component';

describe('Experiment195Component', () => {
  let component: Experiment195Component;
  let fixture: ComponentFixture<Experiment195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
