import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment224Component } from './experiment224.component';

describe('Experiment224Component', () => {
  let component: Experiment224Component;
  let fixture: ComponentFixture<Experiment224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
