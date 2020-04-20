import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment232Component } from './experiment232.component';

describe('Experiment232Component', () => {
  let component: Experiment232Component;
  let fixture: ComponentFixture<Experiment232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
