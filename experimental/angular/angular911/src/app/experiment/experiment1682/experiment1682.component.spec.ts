import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1682Component } from './experiment1682.component';

describe('Experiment1682Component', () => {
  let component: Experiment1682Component;
  let fixture: ComponentFixture<Experiment1682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
