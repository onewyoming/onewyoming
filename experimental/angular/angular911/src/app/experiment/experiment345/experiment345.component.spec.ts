import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment345Component } from './experiment345.component';

describe('Experiment345Component', () => {
  let component: Experiment345Component;
  let fixture: ComponentFixture<Experiment345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
