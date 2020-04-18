import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment463Component } from './experiment463.component';

describe('Experiment463Component', () => {
  let component: Experiment463Component;
  let fixture: ComponentFixture<Experiment463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
