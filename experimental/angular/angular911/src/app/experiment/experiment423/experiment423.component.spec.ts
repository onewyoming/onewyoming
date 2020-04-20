import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment423Component } from './experiment423.component';

describe('Experiment423Component', () => {
  let component: Experiment423Component;
  let fixture: ComponentFixture<Experiment423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
