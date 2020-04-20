import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment53Component } from './experiment53.component';

describe('Experiment53Component', () => {
  let component: Experiment53Component;
  let fixture: ComponentFixture<Experiment53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
