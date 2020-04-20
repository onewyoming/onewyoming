import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment315Component } from './experiment315.component';

describe('Experiment315Component', () => {
  let component: Experiment315Component;
  let fixture: ComponentFixture<Experiment315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
