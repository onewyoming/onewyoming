import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment339Component } from './experiment339.component';

describe('Experiment339Component', () => {
  let component: Experiment339Component;
  let fixture: ComponentFixture<Experiment339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
