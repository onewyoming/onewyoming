import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment647Component } from './experiment647.component';

describe('Experiment647Component', () => {
  let component: Experiment647Component;
  let fixture: ComponentFixture<Experiment647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
